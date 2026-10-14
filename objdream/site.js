const state = { model: 'all', task: 'all', setting: 'all', outcome: 'all' };
const grid = document.querySelector('#video-grid');
const status = document.querySelector('#gallery-status');
let clips = [];

function makeCard(clip) {
  const card = document.createElement('article');
  card.className = 'video-card';
  const video = document.createElement('video');
  video.controls = true;
  video.preload = 'none';
  video.playsInline = true;
  video.poster = clip.poster;
  video.setAttribute('aria-label', `${clip.model} ${clip.task}, ${clip.condition}, ${clip.outcome}`);
  const source = document.createElement('source');
  source.src = clip.src;
  source.type = 'video/mp4';
  video.append(source);
  const body = document.createElement('div');
  body.className = 'video-body';
  const topline = document.createElement('div');
  topline.className = 'video-topline';
  const model = document.createElement('span');
  model.className = 'model-name';
  model.textContent = clip.model;
  const duration = document.createElement('span');
  duration.textContent = `${Math.round(clip.duration)}s`;
  topline.append(model, duration);
  const title = document.createElement('h3');
  title.textContent = clip.task;
  const tags = document.createElement('div');
  tags.className = 'video-tags';
  const setting = document.createElement('span');
  setting.textContent = `${clip.condition} setting`;
  const outcome = document.createElement('span');
  outcome.textContent = clip.outcome;
  outcome.className = clip.outcome.toLowerCase();
  tags.append(setting, outcome);
  if (clip.take > 1) {
    const take = document.createElement('span');
    take.textContent = `Take ${clip.take}`;
    tags.append(take);
  }
  body.append(topline, title, tags);
  card.append(video, body);
  return card;
}

function render() {
  const visible = clips.filter(clip =>
    (state.model === 'all' || clip.modelId === state.model) &&
    (state.task === 'all' || clip.taskId === state.task) &&
    (state.setting === 'all' || clip.condition === state.setting) &&
    (state.outcome === 'all' || clip.outcome === state.outcome)
  );
  grid.replaceChildren(...visible.map(makeCard));
  status.textContent = `${visible.length} of ${clips.length} videos${visible.length ? '' : ' · Try another filter'}`;
}

document.querySelectorAll('[data-model]').forEach(button => {
  button.addEventListener('click', () => {
    state.model = button.dataset.model;
    document.querySelectorAll('[data-model]').forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    render();
  });
});
[['task-filter', 'task'], ['setting-filter', 'setting'], ['outcome-filter', 'outcome']].forEach(([id, key]) => {
  document.getElementById(id).addEventListener('change', event => {
    state[key] = event.target.value;
    render();
  });
});

fetch('./media.json').then(response => {
  if (!response.ok) throw new Error('Unable to load video catalog');
  return response.json();
}).then(data => {
  clips = data.sort((a, b) => {
    const rank = { objdream: 0, 'pi0.5': 1, controlVLA: 2 };
    const taskRank = { button: 0, block: 1, fruit: 2, sweeping: 3 };
    return rank[a.modelId] - rank[b.modelId]
      || a.condition.localeCompare(b.condition)
      || taskRank[a.taskId] - taskRank[b.taskId]
      || b.outcome.localeCompare(a.outcome)
      || a.id.localeCompare(b.id);
  });
  render();
}).catch(() => { status.textContent = 'Videos are temporarily unavailable.'; });

document.querySelector('#copy-citation').addEventListener('click', async event => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(document.querySelector('#bibtex').textContent);
    button.textContent = 'Copied';
    window.setTimeout(() => { button.textContent = 'Copy BibTeX'; }, 1800);
  } catch {
    button.textContent = 'Select text to copy';
  }
});
