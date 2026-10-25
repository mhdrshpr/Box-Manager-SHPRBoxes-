/**
 * Box Manager - Local Client-Side Application
 * Minimalist, elegant dashboard for managing cartons, locations, and items.
 * Includes 3D Carton boxes, QR Code generator with text, and live/image QR Scanner.
 */

// Default Fallback Database Structure
const DEFAULT_DATABASE = {
  settings: {
    sizes: [
      { id: 1, name: "سایز ۱ (خیلی کوچک - XS)", code: "XS", dimensions: "20 × 15 × 10 cm", volume: "3 لیتر", visualScale: 0.75, color: "#94a3b8" },
      { id: 2, name: "سایز ۲ (کوچک - S)", code: "S", dimensions: "30 × 20 × 15 cm", volume: "9 لیتر", visualScale: 0.88, color: "#60a5fa" },
      { id: 3, name: "سایز ۳ (متوسط - M)", code: "M", dimensions: "40 × 30 × 25 cm", volume: "30 لیتر", visualScale: 1.0, color: "#34d399" },
      { id: 4, name: "سایز ۴ (بزرگ - L)", code: "L", dimensions: "50 × 40 × 35 cm", volume: "70 لیتر", visualScale: 1.15, color: "#fbbf24" },
      { id: 5, name: "سایز ۵ (خیلی بزرگ - XL)", code: "XL", dimensions: "65 × 50 × 45 cm", volume: "145 لیتر", visualScale: 1.3, color: "#f87171" }
    ]
  },
  locations: [
    { id: "loc-1", name: "انباری اصلی", icon: "warehouse", description: "طبقه همکف جنب آسانسور" },
    { id: "loc-2", name: "اتاق کار", icon: "workspaces", description: "کمد دیواری سمت راست" },
    { id: "loc-3", name: "کمد دیواری پذیرایی", icon: "door_sliding", description: "طبقه بالای قفسه‌ها" },
    { id: "loc-4", name: "پارکینگ", icon: "garage", description: "باکس فلزی شماره ۳" }
  ],
  boxes: [
    {
      id: "box-1",
      code: "BOX-101",
      title: "ابزارآلات برقی و کابل‌ها",
      locationId: "loc-1",
      sizeId: 3,
      color: "#3b82f6",
      notes: "وسایل برقی سبک و کابل‌های رابط با احتیاط حمل شود",
      createdAt: "2026-10-10",
      items: [
        {
          id: "item-101-1",
          name: "دریل پیچ‌گوشتی شارژی",
          description: "دریل ۱۲ ولت به همراه ۲ باتری و شارژر فابریک",
          quantity: 1,
          image: ""
        },
        {
          id: "item-101-2",
          name: "مجموعه کابل HDMI و DisplayPort",
          description: "۴ رشته کابل انتقال تصویر با طول‌های مختلف",
          quantity: 4,
          image: ""
        },
        {
          id: "item-101-3",
          name: "هویه و قلع کش",
          description: "هویه ۶۰ وات با پایه نگهدارنده و سیم لحیم",
          quantity: 2,
          image: ""
        },
        {
          id: "item-101-4",
          name: "مولتی‌متر دیجیتال",
          description: "دستگاه تست ولتاژ و اهم با پراب‌های اصلی",
          quantity: 1,
          image: ""
        }
      ]
    },
    {
      id: "box-2",
      code: "BOX-102",
      title: "کتاب‌ها و مدارک قدیمی",
      locationId: "loc-2",
      sizeId: 4,
      color: "#10b981",
      notes: "کتاب‌های مرجع مهندسی و اسناد بایگانی شده",
      createdAt: "2026-10-12",
      items: [
        {
          id: "item-102-1",
          name: "کتاب‌های مرجع طراحی نرم‌افزار",
          description: "۵ جلد کتاب معماری و الگوهای طراحی",
          quantity: 5,
          image: ""
        },
        {
          id: "item-102-2",
          name: "دفترچه خاطرات و یادداشت‌ها",
          description: "دفترچه‌های سال‌های گذشته",
          quantity: 3,
          image: ""
        }
      ]
    },
    {
      id: "box-3",
      code: "BOX-103",
      title: "لوازم دکوری و نورپردازی جشن",
      locationId: "loc-3",
      sizeId: 2,
      color: "#f59e0b",
      notes: "ریسه‌های ال‌ای‌دی و شمع‌های معطر",
      createdAt: "2026-10-14",
      items: [
        {
          id: "item-103-1",
          name: "ریسه ال‌ای‌دی آفتابی ۱۰ متری",
          description: "ریسه سوزنی با آداپتور ۲۲۰ ولت",
          quantity: 3,
          image: ""
        },
        {
          id: "item-103-2",
          name: "شمع‌های معطر استوانه‌ای",
          description: "شمع‌های وانیل و دارچین",
          quantity: 6,
          image: ""
        }
      ]
    },
    {
      id: "box-4",
      code: "BOX-104",
      title: "قطعات الکترونیکی و بردها",
      locationId: "loc-2",
      sizeId: 1,
      color: "#8b5cf6",
      notes: "بردهای آردوینو، سنسورها و قطعات SMD",
      createdAt: "2026-10-15",
      items: [
        {
          id: "item-104-1",
          name: "میکروکنترلر ESP32 و Arduino Uno",
          description: "برد توسعه وای‌فای و بلوتوث با ماژول‌های کمکی",
          quantity: 4,
          image: ""
        },
        {
          id: "item-104-2",
          name: "جعبه مقاومت‌ها و خازن‌ها",
          description: "ارگانایزر قطعات با تفکیک مقادیر مختلف",
          quantity: 1,
          image: ""
        }
      ]
    },
    {
      id: "box-5",
      code: "BOX-105",
      title: "تجهیزات کمپینگ و چادر سفری",
      locationId: "loc-4",
      sizeId: 5,
      color: "#ef4444",
      notes: "چادر ۴ نفره، کیسه خواب و زیرانداز ضدآب",
      createdAt: "2026-10-16",
      items: [
        {
          id: "item-105-1",
          name: "چادر مسافرتی عصایی ۴ نفره",
          description: "چادر دوپوش ضد آب با میخ و طناب مهار",
          quantity: 1,
          image: ""
        },
        {
          id: "item-105-2",
          name: "کیسه خواب پر منفی ۵ درجه",
          description: "کیسه خواب سبک کوهنوردی",
          quantity: 2,
          image: ""
        },
        {
          id: "item-105-3",
          name: "اجاق گاز سفری کپسولی",
          description: "سرشعله تیتانیومی مسافرتی به همراه ۲ کپسول گاز",
          quantity: 1,
          image: ""
        },
        {
          id: "item-105-4",
          name: "چراغ قوه شارژی پیشانی",
          description: "چراغ هدلایت ضدآب با کابل شارژ تایپ سی",
          quantity: 2,
          image: ""
        }
      ]
    }
  ]
};

// Application State
const state = {
  db: null,
  activeLocationFilter: "all",
  activeSizeFilter: "all",
  activeSort: "newest",
  searchQuery: "",
  viewMode: "grid", // 'grid' | 'grouped'
  activeBoxDetailId: null,
  pendingItemImage: "",
  activeQrBox: null,
  cameraStream: null,
  scannerScanning: false
};

// Storage Key
const STORAGE_KEY = "box_manager_db_v1";
const THEME_KEY = "box_manager_theme";

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */

document.addEventListener("DOMContentLoaded", async () => {
  initTheme();
  setupEventListeners();
  showSkeleton(true);
  await loadDatabase();
  renderSizePicker();
  renderApp();
  setTimeout(() => showSkeleton(false), 300);
});

/* ==========================================================================
   THEME (DARK / LIGHT)
   ========================================================================== */

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const newTheme = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem(THEME_KEY, newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("themeIcon");
  const mobileIcon = document.getElementById("mobileThemeIcon");
  const iconName = theme === "dark" ? "light_mode" : "dark_mode";
  if (icon) icon.textContent = iconName;
  if (mobileIcon) mobileIcon.textContent = iconName;
}

/* ==========================================================================
   DATABASE MANAGEMENT & ERROR HANDLING (data/data.json + AUTO-CREATE)
   ========================================================================== */

async function loadDatabase() {
  // 1. Check LocalStorage first
  const localData = localStorage.getItem(STORAGE_KEY);
  if (localData) {
    try {
      state.db = JSON.parse(localData);
      return;
    } catch (e) {
      console.warn("خطا در خواندن پایگاه داده محلی مرورگر:", e);
      showToast("خطا در بازیابی دیتابیس محلی مرورگر؛ در حال تلاش برای بارگذاری فایل...", "warning");
    }
  }

  // 2. Try fetching data/data.json
  try {
    const response = await fetch("data/data.json");
    if (response.ok) {
      state.db = await response.json();
      saveDatabaseLocally();
      showToast("پایگاه داده data.json با موفقیت بارگذاری شد.", "success");
      return;
    } else {
      throw new Error(`خطای سرور یا عدم وجود فایل (وضعیت: ${response.status})`);
    }
  } catch (err) {
    console.info("فایل data/data.json یافت نشد یا در دسترس نیست. ایجاد خودکار نسخه پیش‌فرض...", err);
    // Auto-create database with default data
    state.db = JSON.parse(JSON.stringify(DEFAULT_DATABASE));
    saveDatabaseLocally();
    showToast("فایل data.json یافت نشد؛ پایگاه داده به صورت خودکار ایجاد و بارگذاری گردید.", "info");
  }
}

function saveDatabaseLocally() {
  if (state.db) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.db));
    } catch (e) {
      showToast("خطا در ذخیره داده‌ها در حافظه مرورگر: " + e.message, "error");
    }
  }
}

function showLoadingOverlay(show = true, message = "در حال ذخیره‌سازی...") {
  const overlay = document.getElementById("globalLoadingOverlay");
  const msgEl = document.getElementById("loadingMessage");
  if (overlay) {
    if (msgEl) msgEl.textContent = message;
    if (show) overlay.classList.add("active");
    else overlay.classList.remove("active");
  }
}

function showSkeleton(show = true) {
  const skel = document.getElementById("skeletonContainer");
  const main = document.getElementById("boxesMainContainer");
  if (skel && main) {
    if (show) {
      skel.style.display = "grid";
      main.style.display = "none";
    } else {
      skel.style.display = "none";
      main.style.display = "block";
    }
  }
}

/* ==========================================================================
   EVENT LISTENERS & BINDINGS
   ========================================================================== */

function setupEventListeners() {
  // Theme toggle
  document.getElementById("themeToggleBtn")?.addEventListener("click", toggleTheme);

  // Search input
  const searchInput = document.getElementById("globalSearchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");

  searchInput?.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    clearSearchBtn.style.display = state.searchQuery ? "block" : "none";
    renderBoxes();
  });

  clearSearchBtn?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    state.searchQuery = "";
    clearSearchBtn.style.display = "none";
    renderBoxes();
  });

  // Filters
  document.getElementById("sizeFilterSelect")?.addEventListener("change", (e) => {
    state.activeSizeFilter = e.target.value;
    renderBoxes();
  });

  document.getElementById("sortBySelect")?.addEventListener("change", (e) => {
    state.activeSort = e.target.value;
    renderBoxes();
  });

  // View toggle
  const gridBtn = document.getElementById("viewGridBtn");
  const groupBtn = document.getElementById("viewGroupedBtn");

  gridBtn?.addEventListener("click", () => {
    state.viewMode = "grid";
    gridBtn.classList.add("active");
    groupBtn.classList.remove("active");
    renderBoxes();
  });

  groupBtn?.addEventListener("click", () => {
    state.viewMode = "grouped";
    groupBtn.classList.add("active");
    gridBtn.classList.remove("active");
    renderBoxes();
  });

  // Modals Open
  document.getElementById("openNewBoxModalBtn")?.addEventListener("click", () => openBoxModal());
  document.getElementById("emptyStateNewBtn")?.addEventListener("click", () => openBoxModal());
  document.getElementById("openLocationsModalBtn")?.addEventListener("click", () => openLocationsModal());
  document.getElementById("openJsonDbModalBtn")?.addEventListener("click", () => openJsonDbModal());
  document.getElementById("openQrScannerModalBtn")?.addEventListener("click", () => openQrScannerModal());

  // Close Modals
  document.querySelectorAll(".close-modal-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal");
      if (modalId) {
        if (modalId === "qrScannerModal") stopCameraScanner();
        closeModal(modalId);
      }
    });
  });

  document.querySelectorAll(".modal-backdrop").forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        if (modal.id === "qrScannerModal") stopCameraScanner();
        modal.classList.remove("active");
      }
    });
  });

  // Box Form submit
  document.getElementById("boxForm")?.addEventListener("submit", handleSaveBox);

  // Box Code Live Validation & Random Generator
  document.getElementById("boxFormCode")?.addEventListener("input", validateBoxCodeLive);
  document.getElementById("generateRandomCodeBtn")?.addEventListener("click", () => {
    const codeInput = document.getElementById("boxFormCode");
    if (codeInput) {
      codeInput.value = generateRandomBoxCode();
      validateBoxCodeLive();
      codeInput.focus();
    }
  });

  // New Location Form submit
  document.getElementById("newLocationForm")?.addEventListener("submit", handleSaveLocation);

  // Box detail actions
  document.getElementById("toggleAddItemFormBtn")?.addEventListener("click", toggleAddItemForm);
  document.getElementById("cancelItemFormBtn")?.addEventListener("click", hideItemForm);
  document.getElementById("itemForm")?.addEventListener("submit", handleSaveItem);
  document.getElementById("detailPrintLabelBtn")?.addEventListener("click", () => {
    if (state.activeBoxDetailId) openPrintLabelModal(state.activeBoxDetailId);
  });
  document.getElementById("detailQrBtn")?.addEventListener("click", () => {
    if (state.activeBoxDetailId) openQrCodeModal(state.activeBoxDetailId);
  });

  // Item Image Handling (File or URL)
  const itemFileInput = document.getElementById("itemFormFileInput");
  const itemUrlInput = document.getElementById("itemFormImageUrl");
  const removeImageBtn = document.getElementById("removeImageBtn");

  itemFileInput?.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        showToast("حجم تصویر نباید بیشتر از ۵ مگابایت باشد.", "warning");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        state.pendingItemImage = event.target.result;
        updateItemImagePreview(state.pendingItemImage, file.name);
      };
      reader.onerror = () => {
        showToast("خطا در خواندن فایل تصویر.", "error");
      };
      reader.readAsDataURL(file);
    }
  });

  itemUrlInput?.addEventListener("input", (e) => {
    const url = e.target.value.trim();
    if (url) {
      state.pendingItemImage = url;
      updateItemImagePreview(url, "تصویر از لینک وب");
    }
  });

  removeImageBtn?.addEventListener("click", () => {
    state.pendingItemImage = "";
    if (itemFileInput) itemFileInput.value = "";
    if (itemUrlInput) itemUrlInput.value = "";
    updateItemImagePreview("", "");
  });

  // QR Generator Actions
  document.getElementById("downloadQrImageBtn")?.addEventListener("click", downloadGeneratedQrCanvas);
  document.getElementById("printQrCardBtn")?.addEventListener("click", printQrCard);

  // Label Print Action
  document.getElementById("printLabelActionBtn")?.addEventListener("click", printPhysicalBoxLabel);

  // QR Scanner Tabs & Upload Handling
  setupScannerHandlers();

  // Mobile Bottom Navigation Bar Events
  document.getElementById("mobileNewBoxBtn")?.addEventListener("click", () => openBoxModal());
  document.getElementById("mobileScanQrBtn")?.addEventListener("click", () => openQrScannerModal());
  document.getElementById("mobileLocationsBtn")?.addEventListener("click", () => openLocationsModal());
  document.getElementById("mobileDatabaseBtn")?.addEventListener("click", () => openJsonDbModal());
  document.getElementById("mobileThemeBtn")?.addEventListener("click", toggleTheme);

  // Custom Delete Modal Confirmation Handling
  const deleteCheckbox = document.getElementById("deleteConfirmCheckbox");
  const execDeleteBtn = document.getElementById("executeDeleteBtn");

  deleteCheckbox?.addEventListener("change", (e) => {
    if (execDeleteBtn) execDeleteBtn.disabled = !e.target.checked;
  });

  execDeleteBtn?.addEventListener("click", () => {
    if (pendingDeleteAction) {
      pendingDeleteAction();
      pendingDeleteAction = null;
    }
    closeModal("customDeleteModal");
  });

  // JSON Database Sync Handlers
  document.getElementById("downloadJsonBtn")?.addEventListener("click", downloadJsonDatabase);
  document.getElementById("uploadJsonFileInput")?.addEventListener("change", handleUploadJsonFile);
  document.getElementById("resetDatabaseBtn")?.addEventListener("click", handleResetDatabase);
}

/* ==========================================================================
   RENDER CORE APP & STATS (REMOVED POPULAR SIZE AS REQUESTED)
   ========================================================================== */

function renderApp() {
  renderStats();
  renderLocationChips();
  renderLocationSelectOptions();
  renderBoxes();
}

function renderStats() {
  const boxes = state.db.boxes || [];
  const locations = state.db.locations || [];

  const totalBoxes = boxes.length;
  let totalItems = 0;

  boxes.forEach(box => {
    const items = box.items || [];
    items.forEach(it => {
      totalItems += parseInt(it.quantity || 1, 10);
    });
  });

  document.getElementById("statTotalBoxes").textContent = totalBoxes.toLocaleString("fa-IR");
  document.getElementById("statTotalItems").textContent = totalItems.toLocaleString("fa-IR");
  document.getElementById("statTotalLocations").textContent = locations.length.toLocaleString("fa-IR");
}

/* ==========================================================================
   RENDER LOCATION CHIPS & SELECTS
   ========================================================================== */

function renderLocationChips() {
  const container = document.getElementById("locationChipsContainer");
  if (!container) return;

  const locations = state.db.locations || [];
  const boxes = state.db.boxes || [];

  const locCounts = {};
  boxes.forEach(b => {
    locCounts[b.locationId] = (locCounts[b.locationId] || 0) + 1;
  });

  let html = `
    <button class="location-chip ${state.activeLocationFilter === 'all' ? 'active' : ''}" data-location="all">
      <span class="material-symbols-rounded">select_all</span>
      <span>همه مکان‌ها</span>
      <span class="chip-count">${boxes.length.toLocaleString('fa-IR')}</span>
    </button>
  `;

  locations.forEach(loc => {
    const count = locCounts[loc.id] || 0;
    const isActive = state.activeLocationFilter === loc.id;
    html += `
      <button class="location-chip ${isActive ? 'active' : ''}" data-location="${loc.id}">
        <span class="material-symbols-rounded">${loc.icon || 'place'}</span>
        <span>${escapeHtml(loc.name)}</span>
        <span class="chip-count">${count.toLocaleString('fa-IR')}</span>
      </button>
    `;
  });

  container.innerHTML = html;

  container.querySelectorAll(".location-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      state.activeLocationFilter = chip.getAttribute("data-location");
      renderLocationChips();
      renderBoxes();
    });
  });
}

function renderLocationSelectOptions() {
  const select = document.getElementById("boxFormLocation");
  if (!select) return;

  const locations = state.db.locations || [];
  select.innerHTML = locations.map(loc => `
    <option value="${loc.id}">${escapeHtml(loc.name)}</option>
  `).join("");
}

/* ==========================================================================
   RENDER 5 PREDEFINED SIZES SELECTOR (MODAL)
   ========================================================================== */

function renderSizePicker() {
  const container = document.getElementById("sizePickerContainer");
  if (!container) return;

  const sizes = state.db.settings?.sizes || [];
  const hiddenInput = document.getElementById("boxFormSizeId");
  const selectedSizeId = parseInt(hiddenInput.value || 3, 10);

  container.innerHTML = sizes.map(size => {
    const isSelected = size.id === selectedSizeId;
    return `
      <div class="size-option-card ${isSelected ? 'selected' : ''}" data-size-id="${size.id}" title="سایز ${size.code}">
        <span class="material-symbols-rounded" style="color: ${size.color || 'var(--primary)'}; font-size: 26px;">
          inventory_2
        </span>
        <span class="size-code-badge">سایز ${size.code}</span>
      </div>
    `;
  }).join("");

  container.querySelectorAll(".size-option-card").forEach(card => {
    card.addEventListener("click", () => {
      const sizeId = card.getAttribute("data-size-id");
      hiddenInput.value = sizeId;
      container.querySelectorAll(".size-option-card").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
    });
  });
}

/* ==========================================================================
   RENDER BOXES & FILTERING LOGIC
   ========================================================================== */

function getFilteredAndSortedBoxes() {
  let boxes = [...(state.db.boxes || [])];

  // 1. Filter by Location
  if (state.activeLocationFilter !== "all") {
    boxes = boxes.filter(b => b.locationId === state.activeLocationFilter);
  }

  // 2. Filter by Size
  if (state.activeSizeFilter !== "all") {
    boxes = boxes.filter(b => b.sizeId === parseInt(state.activeSizeFilter, 10));
  }

  // 3. Search query
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    boxes = boxes.filter(box => {
      const codeMatch = (box.code || "").toLowerCase().includes(q);
      const titleMatch = (box.title || "").toLowerCase().includes(q);
      const notesMatch = (box.notes || "").toLowerCase().includes(q);
      const itemMatch = (box.items || []).some(item =>
        (item.name || "").toLowerCase().includes(q) ||
        (item.description || "").toLowerCase().includes(q)
      );
      return codeMatch || titleMatch || notesMatch || itemMatch;
    });
  }

  // 4. Sorting
  boxes.sort((a, b) => {
    if (state.activeSort === "code") {
      return (a.code || "").localeCompare(b.code || "");
    }
    if (state.activeSort === "size") {
      return (b.sizeId || 0) - (a.sizeId || 0);
    }
    if (state.activeSort === "itemCount") {
      const countA = (a.items || []).reduce((sum, it) => sum + (parseInt(it.quantity || 1, 10)), 0);
      const countB = (b.items || []).reduce((sum, it) => sum + (parseInt(it.quantity || 1, 10)), 0);
      return countB - countA;
    }
    return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
  });

  return boxes;
}

function renderBoxes() {
  const container = document.getElementById("boxesMainContainer");
  const emptyState = document.getElementById("emptyStateView");
  if (!container) return;

  const boxes = getFilteredAndSortedBoxes();

  if (boxes.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.style.display = "flex";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  if (state.viewMode === "grouped") {
    renderGroupedBoxes(container, boxes);
  } else {
    renderFlatGridBoxes(container, boxes);
  }
}

function renderFlatGridBoxes(container, boxes) {
  let html = `<div class="boxes-grid">`;
  boxes.forEach(box => {
    html += generateBoxCardHtml(box);
  });
  html += `</div>`;
  container.innerHTML = html;
  bindBoxCardEvents(container);
}

function renderGroupedBoxes(container, boxes) {
  const locations = state.db.locations || [];
  const groups = {};
  boxes.forEach(box => {
    const locId = box.locationId || "unassigned";
    if (!groups[locId]) groups[locId] = [];
    groups[locId].push(box);
  });

  let html = "";
  locations.forEach(loc => {
    const locBoxes = groups[loc.id] || [];
    if (locBoxes.length > 0) {
      html += `
        <div class="group-section">
          <div class="group-header">
            <div class="group-title-wrapper">
              <span class="material-symbols-rounded">${loc.icon || 'location_on'}</span>
              <h3 class="group-title">${escapeHtml(loc.name)}</h3>
              <span class="group-badge">${locBoxes.length.toLocaleString('fa-IR')} کارتن</span>
            </div>
            <span style="font-size: 0.8rem; color: var(--text-muted);">${escapeHtml(loc.description || '')}</span>
          </div>
          <div class="boxes-grid">
            ${locBoxes.map(b => generateBoxCardHtml(b)).join("")}
          </div>
        </div>
      `;
    }
  });

  if (groups["unassigned"] && groups["unassigned"].length > 0) {
    html += `
      <div class="group-section">
        <div class="group-header">
          <div class="group-title-wrapper">
            <span class="material-symbols-rounded">help</span>
            <h3 class="group-title">بدون مکان مشخص</h3>
            <span class="group-badge">${groups["unassigned"].length.toLocaleString('fa-IR')} کارتن</span>
          </div>
        </div>
        <div class="boxes-grid">
          ${groups["unassigned"].map(b => generateBoxCardHtml(b)).join("")}
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
  bindBoxCardEvents(container);
}

/* ==========================================================================
   SEARCH HIGHLIGHTING UTILITY
   ========================================================================== */

function highlightMatch(text, query) {
  if (!text) return "";
  const safeText = escapeHtml(String(text));
  const cleanQuery = (query || "").trim();
  if (!cleanQuery) return safeText;

  const safeQuery = escapeHtml(cleanQuery);
  const escapedQuery = safeQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escapedQuery})`, "gi");

  return safeText.replace(regex, `<mark class="search-highlight">$1</mark>`);
}

/* ==========================================================================
   CUTE 3D CARDBOARD BOX CARD GENERATOR (WITH PROPORTIONAL 3D SIZES 1 TO 5)
   & STRICT MAX-3 ITEMS REQUIREMENT
   ========================================================================== */

function generateBoxCardHtml(box) {
  const size = (state.db.settings?.sizes || []).find(s => s.id === box.sizeId) || {
    id: 3, name: "سایز ۳", code: "M", dimensions: "40 × 30 × 25 cm", volume: "30L"
  };
  const location = (state.db.locations || []).find(l => l.id === box.locationId) || {
    name: "تعیین نشده", icon: "help"
  };

  const items = box.items || [];
  const totalItemCount = items.reduce((sum, it) => sum + (parseInt(it.quantity || 1, 10)), 0);

  // If searching, prioritize matching items in the preview list
  let displayItems = [...items];
  if (state.searchQuery && state.searchQuery.trim()) {
    const q = state.searchQuery.trim().toLowerCase();
    displayItems.sort((a, b) => {
      const aMatch = (a.name || "").toLowerCase().includes(q) || (a.description || "").toLowerCase().includes(q);
      const bMatch = (b.name || "").toLowerCase().includes(q) || (b.description || "").toLowerCase().includes(q);
      if (aMatch && !bMatch) return -1;
      if (!aMatch && bMatch) return 1;
      return 0;
    });
  }

  // Strict Max 3 items rule: show top 3, and "+ و X مورد دیگر..." for the rest
  const topItems = displayItems.slice(0, 3);
  const remainingCount = displayItems.length - 3;

  return `
    <div class="box-card" style="--box-color: ${box.color || '#3b82f6'};" data-box-id="${box.id}">
      <div>
        <div class="box-card-top">
          <div class="box-identity">
            <span class="box-code-badge">
              <span class="material-symbols-rounded" style="font-size: 14px;">tag</span>
              ${highlightMatch(box.code, state.searchQuery)}
            </span>
            <h3 class="box-title" title="${escapeHtml(box.title)}">${highlightMatch(box.title, state.searchQuery)}</h3>
          </div>

          <!-- Cute 3D Physical Carton Box that scales with Size 1-5 -->
          <div class="carton-3d-scene" title="کارتن سه‌بعدی سایز ${size.code}">
            <div class="carton-3d-box size-${size.id}-box">
              <!-- Top Face with Sealing Tape -->
              <div class="carton-face carton-face-top">
                <div class="carton-tape-top"></div>
              </div>
              <!-- Front Face with Shipping Label & Barcode -->
              <div class="carton-face carton-face-front">
                <div class="carton-tape-vertical"></div>
                <div class="carton-mini-label">
                  <span class="carton-mini-barcode">|||||||||</span>
                  <span>${escapeHtml(box.code)}</span>
                </div>
                <div class="carton-handle"></div>
              </div>
              <!-- Side Face with Fragile stamp & Size Tag -->
              <div class="carton-face carton-face-side">
                <span class="carton-fragile-stamp">FRAGILE</span>
                <span class="carton-size-tag">${size.code}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Meta Details -->
        <div class="box-meta">
          <span class="box-meta-item" title="مکان قرارگیری">
            <span class="material-symbols-rounded">${location.icon || 'place'}</span>
            <span>${escapeHtml(location.name)}</span>
          </span>
          <span class="box-meta-item" title="سایز کارتن">
            <span class="material-symbols-rounded">view_in_ar</span>
            <span>سایز ${size.code}</span>
          </span>
          <span class="box-meta-item" title="تعداد اقلام ثبت‌شده">
            <span class="material-symbols-rounded">inventory</span>
            <span>${totalItemCount.toLocaleString('fa-IR')} قلم کالا</span>
          </span>
        </div>

        <!-- Items Preview Section (Max 3 Items) -->
        <div class="box-items-preview">
          <div class="preview-header">
            <span>محتویات کارتن</span>
            <span>${items.length.toLocaleString('fa-IR')} عنوان</span>
          </div>
          ${items.length === 0 ? `
            <div class="preview-empty-state">این کارتن هنوز خالی است</div>
          ` : `
            <ul class="preview-items-list">
              ${topItems.map(it => `
                <li class="preview-item-row">
                  <div class="preview-item-name">
                    <span class="preview-item-bullet"></span>
                    <span>${highlightMatch(it.name, state.searchQuery)}</span>
                  </div>
                  <span class="preview-item-qty">${(it.quantity || 1).toLocaleString('fa-IR')} عدد</span>
                </li>
              `).join("")}
            </ul>
            ${remainingCount > 0 ? `
              <div class="preview-more-badge">
                <span class="material-symbols-rounded" style="font-size: 14px;">add</span>
                <span>و ${remainingCount.toLocaleString('fa-IR')} مورد دیگر...</span>
              </div>
            ` : ''}
          `}
        </div>
      </div>

      <!-- Card Actions -->
      <div class="box-card-actions">
        <button class="btn btn-primary btn-sm open-box-detail-btn" data-id="${box.id}" title="مشاهده اقلام داخل کارتن">
          <span class="material-symbols-rounded">folder_open</span>
          <span>مشاهده اقلام</span>
        </button>

        <div class="action-buttons-group">
          <button class="btn btn-secondary btn-icon generate-qr-btn" data-id="${box.id}" title="تولید بارکد QR کارتن">
            <span class="material-symbols-rounded">qr_code_2</span>
          </button>
          <button class="btn btn-secondary btn-icon print-box-label-btn" data-id="${box.id}" title="چاپ برچسب فیزیکی جعبه">
            <span class="material-symbols-rounded">print</span>
          </button>
          <button class="btn btn-secondary btn-icon edit-box-btn" data-id="${box.id}" title="ویرایش اطلاعات کارتن">
            <span class="material-symbols-rounded">edit</span>
          </button>
          <button class="btn btn-danger btn-icon delete-box-btn" data-id="${box.id}" title="حذف این کارتن">
            <span class="material-symbols-rounded">delete</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function bindBoxCardEvents(container) {
  // Click anywhere on box-card to open items modal
  container.querySelectorAll(".box-card").forEach(card => {
    card.addEventListener("click", () => {
      const boxId = card.getAttribute("data-box-id");
      if (boxId) openBoxDetailModal(boxId);
    });
  });

  // Open details button
  container.querySelectorAll(".open-box-detail-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openBoxDetailModal(btn.getAttribute("data-id"));
    });
  });

  // Generate QR
  container.querySelectorAll(".generate-qr-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openQrCodeModal(btn.getAttribute("data-id"));
    });
  });

  // Edit box
  container.querySelectorAll(".edit-box-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openBoxModal(btn.getAttribute("data-id"));
    });
  });

  // Print label
  container.querySelectorAll(".print-box-label-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openPrintLabelModal(btn.getAttribute("data-id"));
    });
  });

  // Delete box
  container.querySelectorAll(".delete-box-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      confirmDeleteBox(btn.getAttribute("data-id"));
    });
  });
}

/* ==========================================================================
   BOX CREATE / EDIT MODAL & FORM
   ========================================================================== */

function isBoxCodeTaken(code, currentBoxId = null) {
  if (!code) return false;
  const cleanCode = code.trim().toLowerCase();
  const boxes = state.db?.boxes || [];
  return boxes.some(b => b.code && b.code.trim().toLowerCase() === cleanCode && b.id !== currentBoxId);
}

function generateRandomBoxCode() {
  const boxes = state.db?.boxes || [];
  const existingCodes = new Set(boxes.map(b => (b.code || "").trim().toUpperCase()));

  for (let attempt = 0; attempt < 2000; attempt++) {
    // Generate between 3 to 5 digits (e.g. BOX-123 or BOX-12345)
    const digitsLength = Math.floor(Math.random() * 3) + 3; // 3, 4, or 5
    const min = Math.pow(10, digitsLength - 1);
    const max = Math.pow(10, digitsLength) - 1;
    const randomDigits = Math.floor(Math.random() * (max - min + 1)) + min;
    const candidate = `BOX-${randomDigits}`;

    if (!existingCodes.has(candidate.toUpperCase())) {
      return candidate;
    }
  }

  return `BOX-${Math.floor(100 + Math.random() * 99899)}`;
}

function validateBoxCodeLive() {
  const codeInput = document.getElementById("boxFormCode");
  const hintEl = document.getElementById("boxFormCodeHint");
  const saveBtn = document.getElementById("saveBoxBtn");
  const currentBoxId = document.getElementById("boxFormId")?.value || null;

  if (!codeInput || !hintEl) return;

  const code = codeInput.value.trim();

  if (!code) {
    codeInput.classList.remove("input-invalid");
    hintEl.classList.remove("hint-invalid");
    hintEl.textContent = "شناسه یکتا برای چاپ و الصاق برچسب QR";
    if (saveBtn) saveBtn.disabled = false;
    return;
  }

  const isDuplicate = isBoxCodeTaken(code, currentBoxId);

  if (isDuplicate) {
    codeInput.classList.add("input-invalid");
    hintEl.classList.add("hint-invalid");
    hintEl.textContent = "شناسه تکراری است!";
    if (saveBtn) saveBtn.disabled = true;
  } else {
    codeInput.classList.remove("input-invalid");
    hintEl.classList.remove("hint-invalid");
    hintEl.textContent = "شناسه یکتا برای چاپ و الصاق برچسب QR";
    if (saveBtn) saveBtn.disabled = false;
  }
}

function openBoxModal(boxId = null) {
  const modal = document.getElementById("boxModal");
  const form = document.getElementById("boxForm");
  const modalTitle = document.getElementById("boxModalTitle");
  const modalIcon = document.getElementById("boxModalIcon");

  renderLocationSelectOptions();
  renderSizePicker();

  if (boxId) {
    const box = (state.db.boxes || []).find(b => b.id === boxId);
    if (!box) return;

    modalTitle.textContent = "ویرایش کارتن";
    modalIcon.textContent = "edit";

    document.getElementById("boxFormId").value = box.id;
    document.getElementById("boxFormCode").value = box.code || "";
    document.getElementById("boxFormTitle").value = box.title || "";
    document.getElementById("boxFormLocation").value = box.locationId || "";
    document.getElementById("boxFormSizeId").value = box.sizeId || 3;
    document.getElementById("boxFormColor").value = box.color || "#3b82f6";
    document.getElementById("boxFormNotes").value = box.notes || "";

    document.querySelectorAll(".size-option-card").forEach(c => {
      if (parseInt(c.getAttribute("data-size-id"), 10) === (box.sizeId || 3)) {
        c.classList.add("selected");
      } else {
        c.classList.remove("selected");
      }
    });

    validateBoxCodeLive();
  } else {
    modalTitle.textContent = "افزودن کارتن جدید";
    modalIcon.textContent = "add_box";

    form.reset();
    document.getElementById("boxFormId").value = "";
    
    const randomCode = generateRandomBoxCode();
    document.getElementById("boxFormCode").value = randomCode;
    document.getElementById("boxFormSizeId").value = 3;

    document.querySelectorAll(".size-option-card").forEach(c => {
      if (parseInt(c.getAttribute("data-size-id"), 10) === 3) {
        c.classList.add("selected");
      } else {
        c.classList.remove("selected");
      }
    });

    validateBoxCodeLive();
  }

  modal.classList.add("active");
}

function handleSaveBox(e) {
  e.preventDefault();

  const id = document.getElementById("boxFormId").value;
  const code = document.getElementById("boxFormCode").value.trim();
  const title = document.getElementById("boxFormTitle").value.trim();
  const locationId = document.getElementById("boxFormLocation").value;
  const sizeId = parseInt(document.getElementById("boxFormSizeId").value, 10);
  const color = document.getElementById("boxFormColor").value;
  const notes = document.getElementById("boxFormNotes").value.trim();

  if (!code || !title) {
    showToast("لطفاً شناسه و عنوان کارتن را وارد نمایید.", "error");
    return;
  }

  if (isBoxCodeTaken(code, id)) {
    showToast("این کد شناسه قبلاً برای کارتن دیگری ثبت شده است.", "error");
    validateBoxCodeLive();
    return;
  }

  if (id) {
    const boxIndex = state.db.boxes.findIndex(b => b.id === id);
    if (boxIndex !== -1) {
      state.db.boxes[boxIndex] = {
        ...state.db.boxes[boxIndex],
        code,
        title,
        locationId,
        sizeId,
        color,
        notes
      };
      showToast("اطلاعات کارتن با موفقیت به‌روزرسانی شد.", "success");
    }
  } else {
    const newBox = {
      id: "box-" + Date.now(),
      code,
      title,
      locationId,
      sizeId,
      color,
      notes,
      createdAt: new Date().toISOString().split("T")[0],
      items: []
    };
    state.db.boxes.unshift(newBox);
    showToast("کارتن جدید با موفقیت ایجاد شد.", "success");
  }

  saveDatabaseLocally();
  closeModal("boxModal");
  renderApp();
}

let pendingDeleteAction = null;

function openCustomDeleteModal({ title, targetName, description, onConfirm }) {
  const modal = document.getElementById("customDeleteModal");
  if (!modal) return;

  document.getElementById("deleteModalTitle").textContent = title || "تایید حذف دائمی";
  document.getElementById("deleteTargetName").textContent = targetName || "";
  document.getElementById("deleteTargetDesc").textContent = description || "";

  const checkbox = document.getElementById("deleteConfirmCheckbox");
  const execBtn = document.getElementById("executeDeleteBtn");

  if (checkbox) checkbox.checked = false;
  if (execBtn) execBtn.disabled = true;

  pendingDeleteAction = onConfirm;
  modal.classList.add("active");
}

function confirmDeleteBox(boxId) {
  const box = (state.db.boxes || []).find(b => b.id === boxId);
  if (!box) return;

  const itemCount = (box.items || []).length;
  openCustomDeleteModal({
    title: "تایید حذف کارتن",
    targetName: `کارتن: ${box.title} (${box.code})`,
    description: `این کارتن شامل ${itemCount} قلم کالای ثبت‌شده است. با حذف این کارتن، تمام اقلام داخلی آن نیز به صورت کامل و دائمی از حافظه سیستم پاک خواهند شد.`,
    onConfirm: () => {
      state.db.boxes = state.db.boxes.filter(b => b.id !== boxId);
      saveDatabaseLocally();
      renderApp();
      showToast(`کارتن "${box.title}" با موفقیت برای همیشه حذف گردید.`, "info");
    }
  });
}

/* ==========================================================================
   BOX DETAILS & ITEMS MANAGER MODAL
   ========================================================================== */

function openBoxDetailModal(boxId) {
  const box = (state.db.boxes || []).find(b => b.id === boxId);
  if (!box) {
    showToast("کارتن مورد نظر یافت نشد.", "error");
    return;
  }

  state.activeBoxDetailId = boxId;
  const modal = document.getElementById("boxDetailModal");

  document.getElementById("boxDetailTitle").textContent = box.title;
  document.getElementById("boxDetailCodeBadge").textContent = box.code;

  const size = (state.db.settings?.sizes || []).find(s => s.id === box.sizeId) || {};
  const location = (state.db.locations || []).find(l => l.id === box.locationId) || {};

  document.getElementById("detailLocationText").textContent = location.name || "بدون مکان";
  document.getElementById("detailSizeText").textContent = `سایز ${size.code || ''}`;
  const volumeTag = document.getElementById("detailVolumeTag");
  if (volumeTag) volumeTag.style.display = "none";

  hideItemForm();
  renderBoxItemsList(box);

  modal.classList.add("active");
}

function renderBoxItemsList(box) {
  const listContainer = document.getElementById("boxItemsList");
  const countBadge = document.getElementById("detailItemsCountBadge");
  if (!listContainer) return;

  const items = box.items || [];
  const totalQty = items.reduce((sum, it) => sum + (parseInt(it.quantity || 1, 10)), 0);
  countBadge.textContent = `${items.length.toLocaleString('fa-IR')} عنوان (${totalQty.toLocaleString('fa-IR')} عدد)`;

  if (items.length === 0) {
    listContainer.innerHTML = `
      <div class="empty-state-view" style="padding: 2rem 1rem;">
        <div class="empty-icon" style="width: 52px; height: 52px; font-size: 24px;">
          <span class="material-symbols-rounded">category</span>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-muted);">هنوز هیچ کالایی داخل این کارتن ثبت نشده است.</p>
        <button class="btn btn-secondary btn-sm" onclick="toggleAddItemForm()">
          <span class="material-symbols-rounded">add</span>
          <span>افزودن اولین قلم کالا</span>
        </button>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = items.map(item => `
    <div class="item-card" data-item-id="${item.id}">
      <div class="item-visual-info">
        <div class="item-thumbnail" onclick="previewImage('${escapeHtml(item.image || '')}')" title="${item.image ? 'کلیک جهت بزرگنمایی' : 'بدون تصویر'}">
          ${item.image ? `
            <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}">
          ` : `
            <span class="material-symbols-rounded" style="color: var(--text-light); font-size: 24px;">image_not_supported</span>
          `}
        </div>
        <div class="item-details">
          <div class="item-title-row">
            <h4 class="item-name">${escapeHtml(item.name)}</h4>
            <span class="item-badge-qty">${(item.quantity || 1).toLocaleString('fa-IR')} عدد</span>
          </div>
          <p class="item-desc">${escapeHtml(item.description || 'بدون توضیحات اضافی')}</p>
        </div>
      </div>

      <div class="item-actions">
        <button class="btn btn-secondary btn-icon btn-sm edit-item-btn" data-id="${item.id}" title="ویرایش کالا">
          <span class="material-symbols-rounded" style="font-size: 18px;">edit</span>
        </button>
        <button class="btn btn-danger btn-icon btn-sm delete-item-btn" data-id="${item.id}" title="حذف کالا">
          <span class="material-symbols-rounded" style="font-size: 18px;">delete</span>
        </button>
      </div>
    </div>
  `).join("");

  listContainer.querySelectorAll(".edit-item-btn").forEach(btn => {
    btn.addEventListener("click", () => showEditItemForm(btn.getAttribute("data-id")));
  });

  listContainer.querySelectorAll(".delete-item-btn").forEach(btn => {
    btn.addEventListener("click", () => confirmDeleteItem(btn.getAttribute("data-id")));
  });
}

function toggleAddItemForm() {
  const container = document.getElementById("itemFormContainer");
  const isHidden = container.style.display === "none";
  if (isHidden) {
    showNewItemForm();
  } else {
    hideItemForm();
  }
}

function showNewItemForm() {
  const container = document.getElementById("itemFormContainer");
  const form = document.getElementById("itemForm");
  const header = document.getElementById("itemFormHeaderTitle");

  form.reset();
  document.getElementById("itemFormId").value = "";
  document.getElementById("itemFormBoxId").value = state.activeBoxDetailId;
  header.textContent = "افزودن کالای جدید به این کارتن";

  state.pendingItemImage = "";
  updateItemImagePreview("", "");

  container.style.display = "block";
  document.getElementById("itemFormName").focus();
}

function showEditItemForm(itemId) {
  const box = (state.db.boxes || []).find(b => b.id === state.activeBoxDetailId);
  if (!box) return;

  const item = (box.items || []).find(it => it.id === itemId);
  if (!item) return;

  const container = document.getElementById("itemFormContainer");
  const header = document.getElementById("itemFormHeaderTitle");

  document.getElementById("itemFormId").value = item.id;
  document.getElementById("itemFormBoxId").value = state.activeBoxDetailId;
  document.getElementById("itemFormName").value = item.name || "";
  document.getElementById("itemFormQuantity").value = item.quantity || 1;
  document.getElementById("itemFormDesc").value = item.description || "";
  document.getElementById("itemFormImageUrl").value = (item.image && item.image.startsWith("http")) ? item.image : "";

  state.pendingItemImage = item.image || "";
  updateItemImagePreview(state.pendingItemImage, item.image ? "تصویر فعلی کالا" : "");

  header.textContent = `ویرایش قلم: ${item.name}`;
  container.style.display = "block";
}

function hideItemForm() {
  const container = document.getElementById("itemFormContainer");
  if (container) container.style.display = "none";
  state.pendingItemImage = "";
}

function updateItemImagePreview(src, label) {
  const container = document.getElementById("itemImagePreviewContainer");
  const img = document.getElementById("itemImagePreviewImg");
  const nameLabel = document.getElementById("itemImageNameLabel");

  if (src) {
    img.src = src;
    nameLabel.textContent = label || "تصویر انتخاب شد";
    container.style.display = "flex";
  } else {
    img.src = "";
    container.style.display = "none";
  }
}

function handleSaveItem(e) {
  e.preventDefault();

  const boxId = state.activeBoxDetailId;
  const itemId = document.getElementById("itemFormId").value;
  const name = document.getElementById("itemFormName").value.trim();
  const quantity = parseInt(document.getElementById("itemFormQuantity").value, 10) || 1;
  const description = document.getElementById("itemFormDesc").value.trim();
  const image = state.pendingItemImage || "";

  if (!name) {
    showToast("لطفاً نام کالا را وارد نمایید.", "error");
    return;
  }

  const box = (state.db.boxes || []).find(b => b.id === boxId);
  if (!box) return;

  if (!box.items) box.items = [];

  if (itemId) {
    const itemIndex = box.items.findIndex(it => it.id === itemId);
    if (itemIndex !== -1) {
      box.items[itemIndex] = {
        ...box.items[itemIndex],
        name,
        quantity,
        description,
        image
      };
      showToast("اطلاعات کالا به‌روز شد.", "success");
    }
  } else {
    const newItem = {
      id: "item-" + Date.now(),
      name,
      quantity,
      description,
      image
    };
    box.items.push(newItem);
    showToast("کالای جدید به کارتن اضافه شد.", "success");
  }

  saveDatabaseLocally();
  hideItemForm();
  renderBoxItemsList(box);
  renderApp();
}

function confirmDeleteItem(itemId) {
  const box = (state.db.boxes || []).find(b => b.id === state.activeBoxDetailId);
  if (!box) return;

  const item = (box.items || []).find(it => it.id === itemId);
  if (!item) return;

  openCustomDeleteModal({
    title: "تایید حذف قلم کالا",
    targetName: `کالا: ${item.name} (${item.quantity} عدد)`,
    description: `این قلم کالا از داخل کارتن "${box.title}" حذف خواهد شد. این عملیات دائمی و غیرقابل بازگشت است.`,
    onConfirm: () => {
      box.items = box.items.filter(it => it.id !== itemId);
      saveDatabaseLocally();
      renderBoxItemsList(box);
      renderApp();
      showToast(`قلم "${item.name}" با موفقیت برای همیشه حذف گردید.`, "info");
    }
  });
}

function previewImage(src) {
  if (!src) return;
  const modal = document.getElementById("imageLightboxModal");
  const img = document.getElementById("lightboxImg");
  img.src = src;
  modal.classList.add("active");
}

/* ==========================================================================
   QR CODE GENERATOR ENGINE (WITH TEXT EMBEDDED DIRECTLY BELOW QR)
   ========================================================================== */

function openQrCodeModal(boxId) {
  const box = (state.db.boxes || []).find(b => b.id === boxId);
  if (!box) return;

  state.activeQrBox = box;
  generateCompositeQrCanvas(box);
  document.getElementById("qrCodeModal").classList.add("active");
}

function generateCompositeQrCanvas(box) {
  const canvas = document.getElementById("qrCompositeCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const size = (state.db.settings?.sizes || []).find(s => s.id === box.sizeId) || {};
  const location = (state.db.locations || []).find(l => l.id === box.locationId) || {};

  // Create temporary container for QRCode.js
  const tempDiv = document.createElement("div");
  new QRCode(tempDiv, {
    text: box.code, // Payload is clean box code
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Give QRCode.js slight moment to render to canvas or img
  setTimeout(() => {
    const qrImg = tempDiv.querySelector("img") || tempDiv.querySelector("canvas");
    if (!qrImg) return;

    // Canvas dimensions: 320 x 380
    canvas.width = 320;
    canvas.height = 380;

    // 1. Background fill
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Decorative outer border
    ctx.strokeStyle = "#cbd5e1";
    ctx.lineWidth = 3;
    ctx.strokeRect(8, 8, canvas.width - 16, canvas.height - 16);

    // 3. Draw QR Image in Center
    ctx.drawImage(qrImg, 60, 24, 200, 200);

    // 4. Draw Carton Text Below QR
    // Separator line
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(30, 242);
    ctx.lineTo(290, 242);
    ctx.stroke();

    // Box Code (Bold, Prominent)
    ctx.fillStyle = "#0f172a";
    ctx.font = "bold 20px 'Darbareh', sans-serif";
    ctx.textAlign = "center";
    ctx.direction = "rtl";
    ctx.fillText(box.code, 160, 274);

    // Box Title
    ctx.fillStyle = "#1e293b";
    ctx.font = "bold 14px 'Darbareh', sans-serif";
    // Truncate title if too long
    let title = box.title || "";
    if (title.length > 28) title = title.substring(0, 26) + "...";
    ctx.fillText(title, 160, 302);

    // Location & Size Subtext
    ctx.fillStyle = "#64748b";
    ctx.font = "12px 'Darbareh', sans-serif";
    const metaText = `${location.name || 'نامشخص'} • سایز ${size.code || ''}`;
    ctx.fillText(metaText, 160, 328);

    // Small footer stamp
    ctx.fillStyle = "#94a3b8";
    ctx.font = "10px sans-serif";
    ctx.fillText("SHPRBOXES • شپر باکسِز", 160, 355);
  }, 100);
}

function downloadGeneratedQrCanvas() {
  const canvas = document.getElementById("qrCompositeCanvas");
  if (!canvas || !state.activeQrBox) return;

  try {
    const imageUri = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `QR_${state.activeQrBox.code}.png`;
    link.href = imageUri;
    document.body.appendChild(link);
    link.click();
    link.remove();
    showToast("تصویر QR با متن کارتن با موفقیت ذخیره شد.", "success");
  } catch (err) {
    showToast("خطا در ایجاد تصویر برای دانلود: " + err.message, "error");
  }
}

/* ==========================================================================
   QR SCANNER ENGINE (LIVE CAMERA & IMAGE UPLOAD SCANNER)
   ========================================================================== */

function openQrScannerModal() {
  document.getElementById("qrScannerModal").classList.add("active");
  startCameraScanner();
}

function setupScannerHandlers() {
  const tabCam = document.getElementById("scannerTabCamBtn");
  const tabFile = document.getElementById("scannerTabFileBtn");
  const camSec = document.getElementById("scannerCameraSection");
  const fileSec = document.getElementById("scannerFileSection");

  tabCam?.addEventListener("click", () => {
    tabCam.className = "btn btn-primary btn-sm";
    tabFile.className = "btn btn-secondary btn-sm";
    camSec.style.display = "block";
    fileSec.style.display = "none";
    startCameraScanner();
  });

  tabFile?.addEventListener("click", () => {
    tabFile.className = "btn btn-primary btn-sm";
    tabCam.className = "btn btn-secondary btn-sm";
    fileSec.style.display = "block";
    camSec.style.display = "none";
    stopCameraScanner();
  });

  // File upload scanner
  const fileInput = document.getElementById("scannerFileInput");
  fileInput?.addEventListener("change", handleScanImageFile);

  // Drag and drop support
  const dropzone = document.getElementById("scannerDropzone");
  dropzone?.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.style.borderColor = "var(--primary)";
  });
  dropzone?.addEventListener("dragleave", () => {
    dropzone.style.borderColor = "var(--border-color)";
  });
  dropzone?.addEventListener("drop", (e) => {
    e.preventDefault();
    dropzone.style.borderColor = "var(--border-color)";
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processQrImageFile(e.dataTransfer.files[0]);
    }
  });
}

async function startCameraScanner() {
  const video = document.getElementById("scannerVideo");
  const statusEl = document.getElementById("scannerCameraStatus");
  if (!video) return;

  stopCameraScanner();

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" }
    });
    state.cameraStream = stream;
    video.srcObject = stream;
    video.setAttribute("playsinline", true);
    await video.play();

    state.scannerScanning = true;
    if (statusEl) statusEl.textContent = "دوربین را مقابل برچسب QR کارتن بگیرید...";
    requestAnimationFrame(scanVideoFrame);
  } catch (err) {
    console.warn("Camera access failed:", err);
    if (statusEl) {
      statusEl.innerHTML = `<span style="color:var(--danger);">دسترسی به دوربین مقدور نشد یا دوربین یافت نشد. می‌توانید از تب «آپلود تصویر بارکد» استفاده کنید.</span>`;
    }
    showToast("دسترسی به وبکم/دوربین داده نشد یا دستگاه دوربین ندارد.", "warning");
  }
}

function scanVideoFrame() {
  if (!state.scannerScanning) return;

  const video = document.getElementById("scannerVideo");
  const canvas = document.getElementById("scannerHiddenCanvas");
  if (!video || !canvas || video.readyState !== video.HAVE_ENOUGH_DATA) {
    if (state.scannerScanning) requestAnimationFrame(scanVideoFrame);
    return;
  }

  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
  if (typeof jsQR !== "undefined") {
    const code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: "dontInvert"
    });

    if (code && code.data) {
      handleDecodedQrText(code.data.trim());
      return; // Stop scanning on find
    }
  }

  if (state.scannerScanning) {
    requestAnimationFrame(scanVideoFrame);
  }
}

function stopCameraScanner() {
  state.scannerScanning = false;
  if (state.cameraStream) {
    state.cameraStream.getTracks().forEach(track => track.stop());
    state.cameraStream = null;
  }
  const video = document.getElementById("scannerVideo");
  if (video) video.srcObject = null;
}

function handleScanImageFile(e) {
  const file = e.target.files[0];
  if (file) processQrImageFile(file);
}

function processQrImageFile(file) {
  showLoadingOverlay(true, "در حال اسکن تصویر بارکد...");
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.getElementById("scannerHiddenCanvas");
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      showLoadingOverlay(false);

      if (typeof jsQR !== "undefined") {
        const result = jsQR(imageData.data, imageData.width, imageData.height);
        if (result && result.data) {
          handleDecodedQrText(result.data.trim());
        } else {
          showToast("هیچ بارکد QR معتبری در تصویر انتخاب‌شده شناسایی نشد.", "error");
        }
      } else {
        showToast("موتور اسکن بارکد در دسترس نیست.", "error");
      }
    };
    img.src = e.target.result;
  };
  reader.onerror = () => {
    showLoadingOverlay(false);
    showToast("خطا در بارگذاری فایل تصویر.", "error");
  };
  reader.readAsDataURL(file);
}

function handleDecodedQrText(qrPayload) {
  stopCameraScanner();
  closeModal("qrScannerModal");

  // Format can be BOX-101 or box:BOX-101
  const cleanCode = qrPayload.replace(/^box:/i, "").trim().toUpperCase();
  const box = (state.db.boxes || []).find(b => b.code.toUpperCase() === cleanCode);

  if (box) {
    showToast(`کارتن "${box.title}" (${box.code}) با موفقیت اسکن شد!`, "success");
    openBoxDetailModal(box.id);
  } else {
    showToast(`کارتنی با کد "${cleanCode}" در پایگاه داده یافت نشد.`, "warning");
  }
}

/* ==========================================================================
   LOCATIONS MANAGEMENT MODAL
   ========================================================================== */

function openLocationsModal() {
  renderLocationsList();
  document.getElementById("locationsModal").classList.add("active");
}

function renderLocationsList() {
  const container = document.getElementById("locationsListContainer");
  if (!container) return;

  const locations = state.db.locations || [];
  const boxes = state.db.boxes || [];

  container.innerHTML = locations.map(loc => {
    const boxCount = boxes.filter(b => b.locationId === loc.id).length;
    return `
      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 0.75rem 1rem; display: flex; align-items: center; justify-content: space-between; gap: 0.75rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem;">
          <span class="material-symbols-rounded text-primary">${loc.icon || 'place'}</span>
          <div>
            <h5 style="font-size: 0.9rem; font-weight: 700;">${escapeHtml(loc.name)}</h5>
            <span style="font-size: 0.76rem; color: var(--text-muted);">${escapeHtml(loc.description || 'بدون توضیح')}</span>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 0.65rem;">
          <span style="font-size: 0.74rem; background: var(--bg-card-subtle); padding: 2px 8px; border-radius: 9999px;">
            ${boxCount.toLocaleString('fa-IR')} کارتن
          </span>
          <button class="btn btn-danger btn-icon btn-sm delete-loc-btn" data-id="${loc.id}" title="حذف مکان">
            <span class="material-symbols-rounded" style="font-size: 16px;">delete</span>
          </button>
        </div>
      </div>
    `;
  }).join("");

  container.querySelectorAll(".delete-loc-btn").forEach(btn => {
    btn.addEventListener("click", () => confirmDeleteLocation(btn.getAttribute("data-id")));
  });
}

function handleSaveLocation(e) {
  e.preventDefault();
  const name = document.getElementById("locFormName").value.trim();
  const desc = document.getElementById("locFormDesc").value.trim();

  if (!name) return;

  const newLoc = {
    id: "loc-" + Date.now(),
    name,
    icon: "place",
    description: desc
  };

  if (!state.db.locations) state.db.locations = [];
  state.db.locations.push(newLoc);

  saveDatabaseLocally();
  document.getElementById("newLocationForm").reset();
  renderLocationsList();
  renderApp();
  showToast("مکان جدید با موفقیت اضافه شد.", "success");
}

function confirmDeleteLocation(locId) {
  const boxesAtLoc = (state.db.boxes || []).filter(b => b.locationId === locId);
  if (boxesAtLoc.length > 0) {
    showToast(`امکان حذف این مکان وجود ندارد زیرا ${boxesAtLoc.length} کارتن در آن قرار دارند. ابتدا مکان آن کارتن‌ها را تغییر دهید.`, "error");
    return;
  }

  const loc = (state.db.locations || []).find(l => l.id === locId);
  if (!loc) return;

  openCustomDeleteModal({
    title: "تایید حذف مکان انبارش",
    targetName: `مکان: ${loc.name}`,
    description: `این موقعیت مکانی از فهرست مکان‌های انبارش سامانه حذف خواهد شد. این عملیات دائمی و غیرقابل بازگشت است.`,
    onConfirm: () => {
      state.db.locations = state.db.locations.filter(l => l.id !== locId);
      saveDatabaseLocally();
      renderLocationsList();
      renderApp();
      showToast(`مکان "${loc.name}" با موفقیت حذف شد.`, "info");
    }
  });
}

/* ==========================================================================
   PRINTABLE PHYSICAL BOX LABEL (WITH INTEGRATED QR CODE EMBED)
   ========================================================================== */

function openPrintLabelModal(boxId) {
  const box = (state.db.boxes || []).find(b => b.id === boxId);
  if (!box) return;

  const size = (state.db.settings?.sizes || []).find(s => s.id === box.sizeId) || {};
  const location = (state.db.locations || []).find(l => l.id === box.locationId) || {};
  const items = box.items || [];

  const area = document.getElementById("printableLabelContentArea");
  area.innerHTML = `
    <div class="printable-label-card">
      <div class="printable-label-header">
        <div>
          <span style="font-size: 0.75rem; text-transform: uppercase; color: #6b7280; font-weight: 700;">شپر باکسِز • SHPRBoxes</span>
          <div class="printable-box-code">${escapeHtml(box.code)}</div>
        </div>
        <div class="printable-box-size">سایز ${size.code || 'M'}</div>
      </div>

      <div style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.85rem; border-bottom: 1px solid #e5e7eb; padding-bottom: 0.5rem;">
        ${escapeHtml(box.title)}
      </div>

      <div class="printable-label-details">
        <div><strong>موقعیت / مکان:</strong> ${escapeHtml(location.name || '-')}</div>
        <div><strong>سایز کارتن:</strong> سایز ${size.code || '-'}</div>
        <div><strong>تاریخ ثبت:</strong> ${box.createdAt || '-'}</div>
        <div><strong>کد شناسه:</strong> ${escapeHtml(box.code)}</div>
      </div>

      <!-- Embedded QR Code for print label -->
      <div class="printable-qr-section" id="printLabelQrTarget">
        <!-- Rendered via JS -->
      </div>

      ${box.notes ? `
        <div style="font-size: 0.8rem; margin-bottom: 0.85rem; background: #f3f4f6; padding: 6px 10px; border-radius: 4px;">
          <strong>یادداشت:</strong> ${escapeHtml(box.notes)}
        </div>
      ` : ''}

      <div class="printable-items-summary">
        <strong>فهرست اقلام داخلی (${items.length} عنوان):</strong>
        <ul>
          ${items.map(it => `
            <li><strong>${escapeHtml(it.name)}</strong> (${(it.quantity || 1).toLocaleString('fa-IR')} عدد) - ${escapeHtml(it.description || '')}</li>
          `).join("")}
        </ul>
      </div>
    </div>
  `;

  // Generate QR into target
  const qrTarget = document.getElementById("printLabelQrTarget");
  if (qrTarget && typeof QRCode !== "undefined") {
    new QRCode(qrTarget, {
      text: box.code,
      width: 100,
      height: 100,
      colorDark: "#000000",
      colorLight: "#ffffff"
    });
  }

  document.getElementById("printLabelModal").classList.add("active");
}

function printPhysicalBoxLabel() {
  const contentArea = document.getElementById("printableLabelContentArea");
  if (!contentArea) return;
  printHtmlContent("برچسب فیزیکی کارتن", contentArea.innerHTML);
}

function printQrCard() {
  const canvas = document.getElementById("qrCompositeCanvas");
  if (!canvas || !state.activeQrBox) return;

  const dataUrl = canvas.toDataURL("image/png");
  const html = `
    <div style="text-align: center; padding: 15px; border: 2px dashed #000; border-radius: 8px; max-width: 320px; margin: 0 auto; background: #fff;">
      <img src="${dataUrl}" alt="QR Code" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
    </div>
  `;
  printHtmlContent(`بارکد QR - کارتن ${state.activeQrBox.code}`, html);
}

function printHtmlContent(title, contentHtml) {
  // Remove any previously created print iframe
  const existingIframe = document.getElementById("printIsolationIframe");
  if (existingIframe) existingIframe.remove();

  const iframe = document.createElement("iframe");
  iframe.id = "printIsolationIframe";
  iframe.style.position = "fixed";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "none";
  iframe.style.opacity = "0";
  iframe.style.pointerEvents = "none";
  document.body.appendChild(iframe);

  const doc = iframe.contentWindow.document;
  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html lang="fa" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <title>${escapeHtml(title)}</title>
      <style>
        @font-face {
          font-family: 'Darbareh';
          src: url('fonts/darbarehWeb-Regular.woff2') format('woff2');
          font-weight: 400;
        }
        @font-face {
          font-family: 'Darbareh';
          src: url('fonts/darbarehWeb-Bold.woff2') format('woff2');
          font-weight: 700;
        }
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: 'Darbareh', system-ui, -apple-system, sans-serif;
          background: #ffffff !important;
          color: #000000 !important;
          direction: rtl;
          text-align: right;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }
        @page {
          size: auto;
          margin: 8mm;
        }
        .printable-label-card {
          width: 100%;
          max-width: 500px;
          border: 2px dashed #000000;
          border-radius: 8px;
          padding: 20px;
          background: #ffffff;
          color: #000000;
        }
        .printable-label-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 2px solid #000;
          padding-bottom: 10px;
          margin-bottom: 15px;
        }
        .printable-box-code {
          font-size: 26px;
          font-weight: 900;
          letter-spacing: 1px;
        }
        .printable-box-size {
          border: 2px solid #000;
          padding: 2px 12px;
          font-weight: 900;
          font-size: 18px;
          border-radius: 4px;
        }
        .printable-label-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 15px;
          font-size: 13px;
        }
        .printable-qr-section {
          text-align: center;
          margin: 15px 0;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
        }
        .printable-qr-section img, .printable-qr-section canvas {
          display: inline-block;
          margin: 0 auto;
        }
        .printable-items-summary {
          border-top: 1px solid #ccc;
          padding-top: 10px;
          font-size: 13px;
        }
        .printable-items-summary ul {
          list-style: square inside;
          margin-top: 6px;
        }
      </style>
    </head>
    <body>
      ${contentHtml}
    </body>
    </html>
  `);
  doc.close();

  setTimeout(() => {
    try {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    } catch (e) {
      console.warn("Direct iframe print failed, falling back to window.print", e);
      window.print();
    }
    setTimeout(() => {
      iframe.remove();
    }, 2500);
  }, 350);
}

/* ==========================================================================
   JSON DATABASE BACKUP & RESTORE
   ========================================================================== */

function openJsonDbModal() {
  document.getElementById("jsonDbModal").classList.add("active");
}

function downloadJsonDatabase() {
  showLoadingOverlay(true, "در حال ایجاد فایل JSON...");
  setTimeout(() => {
    try {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.db, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `data.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast("فایل دیتابیس (data.json) با موفقیت دانلود شد.", "success");
    } catch (err) {
      showToast("خطا در ایجاد خروجی JSON: " + err.message, "error");
    } finally {
      showLoadingOverlay(false);
    }
  }, 400);
}

function handleUploadJsonFile(e) {
  const file = e.target.files[0];
  if (!file) return;

  showLoadingOverlay(true, "در حال پردازش فایل JSON...");
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const parsedData = JSON.parse(event.target.result);
      if (!parsedData.boxes || !Array.isArray(parsedData.boxes)) {
        throw new Error("ساختار فایل معتبر نیست (آرایه boxes یافت نشد).");
      }
      state.db = parsedData;
      saveDatabaseLocally();
      renderApp();
      closeModal("jsonDbModal");
      showToast("پایگاه داده جدید با موفقیت بارگذاری شد.", "success");
    } catch (err) {
      alert("خطا در بارگذاری فایل JSON: " + err.message);
      showToast("فایل JSON نامعتبر است: " + err.message, "error");
    } finally {
      showLoadingOverlay(false);
    }
  };
  reader.onerror = () => {
    showLoadingOverlay(false);
    showToast("خطا در خواندن فایل از روی سیستم.", "error");
  };
  reader.readAsText(file);
}

function handleResetDatabase() {
  if (confirm("آیا مطمئن هستید که می‌خواهید تمام داده‌ها را به حالت نمونه پیش‌فرض اولیه بازگردانید؟")) {
    state.db = JSON.parse(JSON.stringify(DEFAULT_DATABASE));
    saveDatabaseLocally();
    renderApp();
    closeModal("jsonDbModal");
    showToast("اطلاعات به وضعیت پیش‌فرض بازگردانی شد.", "info");
  }
}

/* ==========================================================================
   UTILITY FUNCTIONS
   ========================================================================== */

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("active");
}

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  let iconName = "info";
  if (type === "success") iconName = "check_circle";
  if (type === "error") iconName = "error";
  if (type === "warning") iconName = "warning";

  toast.innerHTML = `
    <span class="material-symbols-rounded" style="font-size: 20px;">${iconName}</span>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function escapeHtml(string) {
  if (string === null || string === undefined) return "";
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
