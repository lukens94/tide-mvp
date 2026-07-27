(() => {
  const titles = {
    home: "Wave Home",
    profile: "My Beach",
    leave: "Leave Tide",
    sprints: "Sprint Surf",
    time: "Time Current",
    docs: "Doc Shell",
    daily: "Daily Wave",
    wellbeing: "Wellbeing Buoy",
    meetings: "Meeting Board",
    polls: "Polling Manager",
    users: "Users & invites",
    ai: "AI + Benchmark",
    newsletter: "Newsletter",
  };

  const auth = document.getElementById("auth");
  const app = document.getElementById("app");
  const crumb = document.getElementById("crumb");
  const toastEl = document.getElementById("toast");
  const notifPanel = document.getElementById("notif-panel");
  let role = "surfer";

  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toastEl.classList.remove("show"), 2200);
  }

  function setRole(next) {
    role = next;
    document.body.classList.toggle("is-board", role === "board");
    document.getElementById("role-surfer").classList.toggle("active", role === "surfer");
    document.getElementById("role-board").classList.toggle("active", role === "board");
    document.getElementById("user-role").textContent = role === "board" ? "Board" : "Surfer";
    document.getElementById("profile-role-badge").textContent = role === "board" ? "Board" : "Surfer";

    document.querySelectorAll(".admin-only").forEach((el) => {
      if (role === "board") {
        el.style.display = "";
        if (el.classList.contains("nav-item")) el.style.display = "flex";
        if (el.classList.contains("card")) el.style.display = "block";
        if (el.classList.contains("btn")) el.style.display = "inline-flex";
        if (el.tagName === "TR") el.style.display = "table-row";
        if (el.classList.contains("tab")) el.style.display = "inline-flex";
        if (el.classList.contains("nav-label")) el.style.display = "block";
        if (el.classList.contains("row") || el.classList.contains("row-between")) el.style.display = "flex";
      } else {
        el.style.display = "none";
      }
    });

    const active = document.querySelector(".page.active");
    if (active && active.id.startsWith("page-")) {
      const page = active.id.replace("page-", "");
      if (role === "surfer" && ["users", "ai", "newsletter"].includes(page)) {
        goTo("home");
      }
    }

    const wellbeingPage = document.getElementById("page-wellbeing");
    if (wellbeingPage?.classList.contains("active")) {
      const firstTab = role === "board"
        ? wellbeingPage.querySelector('.tab[data-tab="w-team"]')
        : wellbeingPage.querySelector('.tab[data-tab="w-mine"]');
      if (firstTab) activateTab(firstTab);
    }
  }

  function activateTab(tab) {
    const tabs = tab.closest(".tabs");
    if (!tabs) return;
    tabs.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const page = tabs.closest(".page");
    if (!page) return;
    page.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
    const panel = document.getElementById(tab.dataset.tab);
    if (panel) panel.classList.add("active");
  }

  function goTo(page) {
    document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
    const el = document.getElementById(`page-${page}`);
    if (!el) return;
    el.classList.add("active");
    document.querySelectorAll(".nav-item").forEach((n) => {
      n.classList.toggle("active", n.dataset.page === page);
    });
    crumb.textContent = titles[page] || page;
    notifPanel.classList.remove("open");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    auth.classList.add("hidden");
    app.classList.remove("hidden");
    setRole("surfer");
    showToast("Benvenuto in Tide — imbraccia la tavola.");
  });

  document.getElementById("btn-magic").addEventListener("click", () => {
    showToast("Magic link inviato (demo)");
  });

  document.getElementById("link-reset").addEventListener("click", (e) => {
    e.preventDefault();
    showToast("Link reset inviato a luca@thewave.studio");
  });

  document.getElementById("logout").addEventListener("click", () => {
    app.classList.add("hidden");
    auth.classList.remove("hidden");
    showToast("Sessione chiusa");
  });

  document.getElementById("nav").addEventListener("click", (e) => {
    const btn = e.target.closest(".nav-item");
    if (!btn) return;
    goTo(btn.dataset.page);
    document.getElementById("sidebar").classList.remove("open");
  });

  document.querySelectorAll("[data-goto]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      goTo(el.dataset.goto);
    });
  });

  document.getElementById("role-surfer").addEventListener("click", () => setRole("surfer"));
  document.getElementById("role-board").addEventListener("click", () => setRole("board"));

  document.getElementById("bell").addEventListener("click", (e) => {
    e.stopPropagation();
    notifPanel.classList.toggle("open");
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".notif-wrap")) notifPanel.classList.remove("open");
  });
  document.getElementById("mark-read").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelectorAll(".notif-item").forEach((n) => n.classList.remove("unread"));
    const dot = document.querySelector("#bell .dot");
    if (dot) dot.remove();
    showToast("Tutte le alert segnate come lette");
  });

  document.querySelectorAll("[data-tabs]").forEach((tabs) => {
    tabs.addEventListener("click", (e) => {
      const tab = e.target.closest(".tab");
      if (!tab) return;
      activateTab(tab);
    });
  });

  document.querySelectorAll("[data-tab-jump]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = document.querySelector(`.tab[data-tab="${btn.dataset.tabJump}"]`);
      if (tab) {
        goTo("wellbeing");
        activateTab(tab);
      }
    });
  });

  document.querySelectorAll("[data-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = document.getElementById(btn.dataset.modal);
      if (modal) modal.classList.add("open");
    });
  });
  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop || e.target.classList.contains("modal-close")) {
        backdrop.classList.remove("open");
      }
    });
  });

  document.querySelectorAll(".toast-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.toast) showToast(btn.dataset.toast);
    });
  });

  document.getElementById("profile-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Profilo salvato");
  });

  document.querySelectorAll(".score-pick").forEach((pick) => {
    pick.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      pick.querySelectorAll("button").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
    });
  });

  document.querySelectorAll(".folder-item").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".folder-item").forEach((f) => f.classList.remove("active"));
      item.classList.add("active");
    });
  });

  document.querySelectorAll(".poll-opt").forEach((opt) => {
    opt.addEventListener("click", () => {
      opt.closest(".card")?.querySelectorAll(".poll-opt").forEach((o) => o.classList.remove("selected"));
      opt.classList.add("selected");
      const radio = opt.querySelector("input");
      if (radio) radio.checked = true;
    });
  });

  const menuToggle = document.getElementById("menu-toggle");
  const mq = window.matchMedia("(max-width: 800px)");
  function syncMenu() {
    menuToggle.style.display = mq.matches ? "grid" : "none";
    if (!mq.matches) document.getElementById("sidebar").classList.remove("open");
  }
  mq.addEventListener("change", syncMenu);
  syncMenu();
  menuToggle.addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("open");
  });
})();
