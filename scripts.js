function loadSection(section) {
    const content = document.getElementById('content');
    content.classList.remove('fade-in');
    content.classList.add('fade-out');

    fetch(section)
        .then(response => response.text())
        .then(data => {
            setTimeout(() => {
                content.innerHTML = data;
                content.classList.remove('fade-out');
                content.classList.add('fade-in');
            }, 300); // 动画时间与 CSS 中的延迟一致
        })
        .catch(error => {
            content.innerHTML = "<p>无法加载内容。</p>";
            content.classList.remove('fade-out');
            content.classList.add('fade-in');
        });
}

// 默认加载主页内容
loadSection('home.html');


const apiBaseURL = window.location.protocol === 'https:' 
    ? '/api'  // 生产环境中使用相对路径
    : 'http://127.0.0.1:8000';  // 本地开发环境

function searchProject() {
    const query = document.getElementById("searchBox").value;
    console.log(window.location.hostname);
    console.log(apiBaseURL);
    console.log(`${apiBaseURL}/projects?search=${query}`)
    fetch(`https://${window.location.hostname}/${apiBaseURL}/projects?search=${query}`)
    .then(response => response.json())
    .then(data => {
        console.log(data); // 打印返回的数据
        const results = document.getElementById("searchResults");
        results.innerHTML = ""; // 清除上次的结果
        if (data.length > 0) {
            data.forEach(project => {
                console.log(project); // 打印每个项目，检查字段
                const div = document.createElement("div");
                div.className = "project";
                div.innerHTML = `<h3>${project.project_name}</h3><p>${project.description}</p>`;
                results.appendChild(div);
            });
        } else {
            results.innerHTML = "No projects found";
        }
    })
    .catch(error => console.error("Error:", error));
};

// document.getElementById('registerForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     fetch(`${apiBaseURL}/register`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({username: username, password: password})
//     })
//     .then(response => response.json())
//     .then(data => {
//         const registerStatus = document.getElementById('registerStatus');
//         if (data.message) {
//             registerStatus.innerHTML = `<p>${data.message}</p>`;
//         }
//     })
//     .catch(error => {
//         console.error("Error:", error);
//         document.getElementById('registerStatus').innerHTML = '<p>Registration failed. Please try again.</p>';
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    console.log('Personal homepage loaded successfully!');
});

