export const setActiveClassToSort = (e) => {
    const filterButtons = document.querySelectorAll(
      ".sidebar-category-list-left button, .sidebar-widget-tag button , .product-filter button , .shop-tab button"
    );
    filterButtons.forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };