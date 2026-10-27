(function () {
  var data = window.PROJECTS || {};
  var keys = Object.keys(data);
  if (!keys.length) return;

  var params = new URLSearchParams(location.search);
  var key = params.get("p");
  if (key && !data[key]) {
    location.replace("../404.html");
    return;
  }
  if (!data[key]) key = keys[0];
  var item = data[key];
  var root = document.documentElement;

  function lang() {
    return root.dataset.lang === "ru" ? "ru" : "en";
  }

  function t(value) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    return value[lang()] || value.en || "";
  }

  function pick(name) {
    return document.querySelector('[data-p="' + name + '"]');
  }

  function clear(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  function fillList(name, values) {
    var list = pick(name);
    if (!list) return;
    clear(list);
    (values || []).forEach(function (value) {
      var li = document.createElement("li");
      li.textContent = value;
      list.append(li);
    });
  }

  function render() {
    var L = lang();
    var next = data[item.next];

    document.title = item.title + " — Ilya Panko";
    pick("kicker").textContent = t(item.kicker);
    pick("title").textContent = item.title;
    pick("lead").textContent = t(item.lead);
    pick("aiBadge").hidden = !item.ai;
    pick("task").textContent = t(item.task);
    pick("stack").textContent = item.stack;

    var meta = pick("meta");
    clear(meta);
    (item.meta || []).forEach(function (row) {
      var wrap = document.createElement("div");
      var dt = document.createElement("dt");
      var dd = document.createElement("dd");
      dt.textContent = t(row.label);
      dd.textContent = t(row.value);
      wrap.append(dt, dd);
      meta.append(wrap);
    });

    fillList("points", item.points && item.points[L]);
    fillList("ai", item.aiFlow && item.aiFlow[L]);
    fillList("achievements", item.achievements && item.achievements[L]);

    var aiBlock = pick("aiBlock");
    aiBlock.hidden = !item.aiFlow;

    var linksBlock = pick("linksBlock");
    var links = pick("links");
    clear(links);
    if (item.links && item.links.length) {
      item.links.forEach(function (link) {
        var a = document.createElement("a");
        a.href = link.href;
        a.target = "_blank";
        a.rel = "noreferrer";
        a.textContent = link.label;
        links.append(a);
      });
      linksBlock.hidden = false;
    } else {
      linksBlock.hidden = true;
    }

    var note = pick("note");
    if (item.note) {
      note.textContent = t(item.note);
      note.hidden = false;
    } else {
      note.hidden = true;
    }

    var nextLink = pick("next");
    if (next) {
      nextLink.href = "project.html?p=" + item.next;
      nextLink.textContent =
        (L === "ru" ? "Следующий кейс: " : "Next case: ") + next.title;
    } else {
      nextLink.hidden = true;
    }
  }

  render();

  new MutationObserver(render).observe(root, {
    attributes: true,
    attributeFilter: ["data-lang"]
  });
})();
