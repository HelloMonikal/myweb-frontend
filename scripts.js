
function searchProject() {
    const query = document.getElementById("searchBox").value;
    fetch(`http://127.0.0.1:8000/projects?search=${query}`)
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

}


document.addEventListener('DOMContentLoaded', function() {
    console.log('Personal homepage loaded successfully!');
});

