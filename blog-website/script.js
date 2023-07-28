function openAddBlogModel() {
    const model = document.getElementById('model')
    document.body.style.overflow = "hidden"
    model.style.display = "flex"
}

function closeBlogModel() {
    const model = document.getElementById('model')
    model.style.display = "none"
    clearAddBlogForm()
}

function clearAddBlogForm() {
    document.getElementById('img-url').value = ""
    document.getElementById('blog-title').value = ""
    document.getElementById('blog-dec').value = ""
    document.getElementById('content').value = ""
}

function saveBlogsToLocalStorage(blogsData) {
    localStorage.setItem("blogs", JSON.stringify(blogsData))
}

function getBlogsFromLocalStorage() {
    const blogsData = JSON.parse(localStorage.getItem("blogs",)) || []
    return blogsData
}

function displayBlogs() {
    const blogsData = getBlogsFromLocalStorage()
    const blogList = document.getElementById('blog-list')
    blogList.innerHTML = ""

    blogsData.forEach((blog) => {
        const blogElement = createBlogElement(blog)
        blogList.appendChild(blogElement)
    });
}

function addBlog(e) {
    e.preventDefault()

    const imgUrl = document.getElementById('img-url').value
    const blogTitle = document.getElementById('blog-title').value
    const blogDec = document.getElementById('blog-dec').value
    const blogContent = document.getElementById('content').value

    const newBlog = document.createElement("div")
    newBlog.classList.add("blogs")
    newBlog.innerHTML = `
    <img src="${imgUrl}" alt="Blog Image" class="blog-img">
    <h3 class="blog-title">${blogTitle}</h3>
    <span class="blog-dec">${blogDec}</span>
    <button class="read-blog">Read</button>
    `
    newBlog.querySelector('.read-blog').addEventListener('click', () => {
        sessionStorage.setItem("currentBlog", newBlog.innerHTML)
        window.location.href = './blog.html'
    })

    const blogList = document.getElementById('blog-list')
    blogList.appendChild(newBlog)
    closeBlogModel()
}


document.getElementById('addNewBlog').addEventListener('click', openAddBlogModel)
document.getElementById('close').addEventListener('click', closeBlogModel)
document.getElementById('addBlog').addEventListener('click', addBlog)
