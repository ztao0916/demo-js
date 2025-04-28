// 创建复制下拉菜单的函数
function createCopyDropdown(containerId, copyData) {
  // 固定的按钮文本
  const buttonText = "一键复制";

  // 根据copyData生成选项配置
  const options = Object.entries(copyData).map(([key, value]) => ({
    type: key,
    text: key,
  }));

  // 创建下拉按钮和内容
  function createDropdown() {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with id '${containerId}' not found`);
      return null;
    }

    // 创建按钮
    const button = document.createElement("button");
    button.className = "dropdown-btn";
    button.textContent = buttonText;

    // 创建下拉内容容器
    const content = document.createElement("div");
    content.className = "dropdown-content";

    // 创建选项
    options.forEach((option) => {
      const link = document.createElement("a");
      link.href = "#";
      link.setAttribute("data-type", option.type);
      link.textContent = option.text;
      content.appendChild(link);
    });

    // 添加到容器
    container.appendChild(button);
    container.appendChild(content);

    return { content, container };
  }

  // 初始化下拉菜单
  const dropdown = createDropdown();
  if (!dropdown) return;

  const { content, container } = dropdown;
  let timeoutId;

  // 添加鼠标事件
  container.addEventListener("mouseenter", () => {
    clearTimeout(timeoutId);
    content.style.visibility = "visible";
    content.style.opacity = "1";
    content.style.pointerEvents = "auto";
  });

  container.addEventListener("mouseleave", () => {
    timeoutId = setTimeout(() => {
      content.style.visibility = "hidden";
      content.style.opacity = "0";
      content.style.pointerEvents = "none";
    }, 300);
  });

  // 添加点击事件
  content.addEventListener("click", async function (e) {
    if (e.target.tagName === "A") {
      e.preventDefault();
      const type = e.target.getAttribute("data-type");
      const textToCopy = copyData[type];

      try {
        await navigator.clipboard.writeText(textToCopy);
        alert("复制成功：" + textToCopy);
      } catch (err) {
        console.error("复制失败:", err);
        alert("复制失败");
      }
    }
  });

  return { content, container };
}

// 示例用法
document.addEventListener("DOMContentLoaded", function () {
  // 创建下拉菜单，传入数据
  const copyData = {
    item_id: "12345678",
    shop_sku: "SHOP-SKU-001",
    product_sku: "PROD-SKU-001",
  };
  createCopyDropdown("dropdownContainer", copyData);
});
