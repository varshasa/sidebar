const menuData = [
    {
        name: "Main 1",
        link: "#main1",
        submenu: [
            {
                name: "Sub 1-1",
                link: "#sub1-1",
                submenu: [
                    { name: "Child 1-1-1", link: "#child1-1-1" },
                    { name: "Child 1-1-2", link: "#child1-1-2" }
                ]
            },
            {
                name: "Sub 1-2",
                link: "#sub1-2",
                submenu: [
                    { name: "Child 1-2-1", link: "#child1-2-1" },
                    { name: "Child 1-2-2", link: "#child1-2-2" }
                ]
            },
            {
                name: "Sub 1-3",
                link: "#sub1-3",
                submenu: [
                    { name: "Child 1-3-1", link: "#child1-3-1" },
                    { name: "Child 1-3-2", link: "#child1-3-2" }
                ]
            }
        ]
    },
    {
        name: "Main 2",
        link: "#main2",
        submenu: [
            {
                name: "Sub 2-1",
                link: "#sub2-1",
                submenu: [
                    { name: "Child 2-1-1", link: "#child2-1-1" },
                    { name: "Child 2-1-2", link: "#child2-1-2" }
                ]
            },
            {
                name: "Sub 2-2",
                link: "#sub2-2",
                submenu: [
                    { name: "Child 2-2-1", link: "#child2-2-1" },
                    { name: "Child 2-2-2", link: "#child2-2-2" }
                ]
            },
            {
                name: "Sub 2-3",
                link: "#sub2-3",
                submenu: [
                    { name: "Child 2-3-1", link: "#child2-3-1" },
                    { name: "Child 2-3-2", link: "#child2-3-2" }
                ]
            }
        ]
    },
    {
        name: "Main 3",
        link: "#main3",
        submenu: [
            {
                name: "Sub 3-1",
                link: "#sub3-1",
                submenu: [
                    { name: "Child 3-1-1", link: "#child3-1-1" },
                    { name: "Child 3-1-2", link: "#child3-1-2" }
                ]
            },
            {
                name: "Sub 3-2",
                link: "#sub3-2",
                submenu: [
                    { name: "Child 3-2-1", link: "#child3-2-1" },
                    { name: "Child 3-2-2", link: "#child3-2-2" }
                ]
            },
            {
                name: "Sub 3-3",
                link: "#sub3-3",
                submenu: [
                    { name: "Child 3-3-1", link: "#child3-3-1" },
                    { name: "Child 3-3-2", link: "#child3-3-2" }
                ]
            }
        ]
    },
    {
        name: "Main 4",
        link: "#main4",
        submenu: [
            {
                name: "Sub 4-1",
                link: "#sub4-1",
                submenu: [
                    { name: "Child 4-1-1", link: "#child4-1-1" },
                    { name: "Child 4-1-2", link: "#child4-1-2" }
                ]
            },
            {
                name: "Sub 4-2",
                link: "#sub4-2",
                submenu: [
                    { name: "Child 4-2-1", link: "#child4-2-1" },
                    { name: "Child 4-2-2", link: "#child4-2-2" }
                ]
            },
            {
                name: "Sub 4-3",
                link: "#sub4-3",
                submenu: [
                    { name: "Child 4-3-1", link: "#child4-3-1" },
                    { name: "Child 4-3-2", link: "#child4-3-2" }
                ]
            }
        ]
    },
    {
        name: "Main 5",
        link: "#main5",
        submenu: [
            {
                name: "Sub 5-1",
                link: "#sub5-1",
                submenu: [
                    { name: "Child 5-1-1", link: "#child5-1-1" },
                    { name: "Child 5-1-2", link: "#child5-1-2" }
                ]
            },
            {
                name: "Sub 5-2",
                link: "#sub5-2",
                submenu: [
                    { name: "Child 5-2-1", link: "#child5-2-1" },
                    { name: "Child 5-2-2", link: "#child5-2-2" }
                ]
            },
            {
                name: "Sub 5-3",
                link: "#sub5-3",
                submenu: [
                    { name: "Child 5-3-1", link: "#child5-3-1" },
                    { name: "Child 5-3-2", link: "#child5-3-2" }
                ]
            }
        ]
    }
];

function buildMenu(menuItems) {
    const ul = document.createElement("ul");

    menuItems.forEach(item => {
        const li = document.createElement("li");

        const a = document.createElement("a");
        a.href = item.link;
        a.textContent = item.name;

        li.appendChild(a);

      
        if (item.submenu) {
            const toggleIcon = document.createElement("span");
            toggleIcon.textContent = "▶"; 
            toggleIcon.classList.add("toggle-icon");

           
            li.insertBefore(toggleIcon, a);

            const submenu = buildMenu(item.submenu);
            submenu.classList.add("submenu");

           
            toggleIcon.addEventListener("click", () => {
                submenu.classList.toggle("show");
                toggleIcon.textContent = submenu.classList.contains("show") ? "▼" : "▶"; 
        }) ;
            li.appendChild(submenu);
        }

        ul.appendChild(li);
    });

    return ul;
}


const sidebar = document.getElementById("sidebar");
const menu = buildMenu(menuData);
sidebar.appendChild(menu);
