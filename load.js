const allBlogs = [
    {
        "cover": "./assets/09_15_2025_The_One_Skill_Every_STEM_Major_Needs.jpg",
        "published": "September 15, 2025",
        "summary": "This one skill is the most important, but most neglected, skill for STEM majors.",
        "tags": ["Communication", "Skills", "STEM"],
        "title": "The One Skill Every STEM Major Needs — But No One Teaches",
        "url": "https://jo2eph.github.io/blog/posts/2025/09_15_communication_skill/",
    },
    {
        "cover": "./assets/09_18_2025_Reflection_on_UChicago_Craft_of_Writing_Effectively.png",
        "published": "September 18, 2025",
        "summary": "A reflection on The Craft of Writing Effectively by the University of Chicago.",
        "tags": ["Writing", "UChicago", "Reflection"],
        "title": "A Reflection on UChicago&apos;s &quot;Craft of Writing Effectively&quot;",
        "url": "https://jo2eph.github.io/blog/posts/2025/09_18_reflection_on_uchicago_writing/",
    },
    {
        "cover": "./assets/09_22_2025_Cybersecurity_for_Everyone.png",
        "published": "September 22, 2025",
        "summary": "Cybersecurity is for everyone. Simple tips and habits to stay safe online.",
        "tags": ["Cybersecurity", "Cryptography", "Online Safety"],
        "title": "Cybersecurity for Everyone: Protect Yourself Online Without Being a Tech Expert",
        "url": "https://jo2eph.github.io/blog/posts/2025/09_22_cybersecurity_for_everyone",
    }
];


// Create Blog Card
function createBlogCard(cover, published, summary, tags, title, url) {

    // Initialize blog card div element
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");

    // Blog Image
    blogCard.appendChild(createBlogImage(cover, title, url));

    // Blog Title
    blogCard.appendChild(createBlogTitle(title, url));

    // Blog Description Container
    blogCard.appendChild(createBlogDescriptionContainer(published, summary, tags));

    return blogCard;
}


/* BLOG IMAGE:
<div class="blog-image">
    <a href="(URL) title="(TITLE)">
        <img src="(COVER)" alt="(TITLE)" title="(TITLE)">
    </a>
</div>
*/
function createBlogImage(cover, title, url) {
    const blogImage = document.createElement("div");
    blogImage.classList.add("blog-image");

    const blogImageChild = document.createElement("a");
    blogImageChild.setAttribute("href", url);
    blogImageChild.setAttribute("title", title);

    const blogImageChildCover = document.createElement("img");
    blogImageChildCover.setAttribute("src", cover);
    blogImageChildCover.setAttribute("alt", title);
    blogImageChildCover.setAttribute("title", title);
    blogImageChild.appendChild(blogImageChildCover);

    blogImage.appendChild(blogImageChild);

    return blogImage;
}


/* BLOG TITLE:
<div class="blog-title">
    <h2>
        <a href="(URL)" title="(TITLE)">
            (TITLE)
        </a>
    </h2>
</div>
*/
function createBlogTitle(title, url) {
    const blogTitle = document.createElement("div");
    blogTitle.classList.add("blog-title");

    const blogTitleHeader = document.createElement("h2");
    
    const blogTitleHeaderChild = document.createElement("a");
    blogTitleHeaderChild.setAttribute("href", url);
    blogTitleHeaderChild.setAttribute("title", title);
    blogTitleHeaderChild.textContent = title;
    blogTitleHeader.appendChild(blogTitleHeaderChild);

    blogTitle.appendChild(blogTitleHeader);
    return blogTitle;
}


/* BLOG DESCRIPTION CONTAINER
CONTAINS 3 DIV CHILDREN NODES:
<div class="blog-description-container">

    <div class="blog-summary">
        (SUMMARY)
    </div>
    
    <div class="blog-author-container">
        <div class="blog-author">
            <img src="./assets/photo.jpg" alt="Joseph Lee" title="Joseph Lee">
        </div>
        <div class="blog-publish-container">
            <div class="blog-author-name">
                Joseph Lee
            </div>
            <div class="blog-publish-date">
                (PUBLISHED)
            </div>
        </div>
    </div>

    <div class="blog-tags">   (TAGS)
        <span class="tag">
            TAG
        </span>
    </div>
</div>
*/
function createBlogDescriptionContainer(published, summary, tags) {
    const blogDescriptionContainer = document.createElement("div");
    blogDescriptionContainer.classList.add("blog-description-container");

    // Blog Summary
    blogDescriptionContainer.appendChild(createBlogSummary(summary));

    // Blog Author Container
    blogDescriptionContainer.appendChild(createBlogAuthorContainer(published));

    // Blog Tags
    blogDescriptionContainer.appendChild(createBlogTags(tags));

    return blogDescriptionContainer;
}


/* BLOG SUMMARY:
<div class="blog-summary">
    (SUMMARY)
</div>
*/
function createBlogSummary(summary) {
    const blogSummary = document.createElement("div");
    blogSummary.classList.add("blog-summary");
    blogSummary.textContent = summary;

    return blogSummary;
}


/* BLOG AUTHOR CONTAINER:
<div class="blog-author-container">
    <div class="blog-author">
        <img src="./assets/photo.jpg" alt="Joseph Lee" title="Joseph Lee">
    </div>

    <div class="blog-publish-container">
        <div class="blog-author-name">
            Joseph Lee
        </div>

        <div class="blog-publish-date">
            (PUBLISHED)
        </div>
    </div>
</div>
*/
function createBlogAuthorContainer(published) {
    const blogAuthorContainer = document.createElement("div");
    blogAuthorContainer.classList.add("blog-author-container");

    // Blog Author
    const blogAuthor = document.createElement("div");
    blogAuthor.classList.add("blog-author");

    const blogAuthorImage = document.createElement("img");
    blogAuthorImage.setAttribute("src", "./assets/photo.jpg");
    blogAuthorImage.setAttribute("alt", "Joseph Lee");
    blogAuthorImage.setAttribute("title", "Joseph Lee");

    blogAuthor.appendChild(blogAuthorImage);
    blogAuthorContainer.appendChild(blogAuthor);

    // Blog Publish Container
    const blogPublishContainer = document.createElement("div");
    blogPublishContainer.classList.add("blog-publish-container");

    // Blog Author Name
    const blogAuthorName = document.createElement("div");
    blogAuthorName.classList.add("blog-author-name");
    blogAuthorName.textContent = "Joseph Lee";
    blogPublishContainer.appendChild(blogAuthorName);

    // Blog Publish Date
    const blogPublishDate = document.createElement("div");
    blogPublishDate.classList.add("blog-publish-date");
    blogPublishDate.textContent = published;
    blogPublishContainer.appendChild(blogPublishDate);

    blogAuthorContainer.appendChild(blogPublishContainer);

    return blogAuthorContainer;
}


/* BLOG TAGS:
<div class="blog-tags">   (TAGS)
    <span class="tag">
        TAG
    </span>
</div>
*/
function createBlogTags(tags) {
    const blogTags = document.createElement("div");
    blogTags.classList.add("blog-tags");

    tags.forEach(tag => {
        const blogTag = document.createElement("span");
        blogTag.classList.add("tag");
        blogTag.textContent = tag;

        blogTags.appendChild(blogTag);
    })

    return blogTags;
}

/* BLOG CARD FORMAT (Need URL, TITLE, COVER, SUMMARY, PUBLISHED, TAGS)
    BLOG CARD HAS 3 DIV CHILDREN
    
<div class="blog-card">

    <div class="blog-image">
        <a href="(URL) title="(TITLE)">
            <img src="(COVER)" alt="(TITLE)" title="(TITLE)">
        </a>
    </div>

    <div class="blog-title">
        <h2>
            <a href="(URL)" title="(TITLE)">
                (TITLE)
            </a>
        </h2>
    </div>

    <div class="blog-description-container">

        <div class="blog-summary">
            (SUMMARY)
        </div>
        
        <div class="blog-author-container">
            <div class="blog-author">
                <img src="./assets/photo.jpg" alt="Joseph Lee" title="Joseph Lee">
            </div>
            <div class="blog-publish-container">
                <div class="blog-author-name">
                    Joseph Lee
                </div>
                <div class="blog-publish-date">
                    (PUBLISHED)
                </div>
            </div>
        </div>

        <div class="blog-tags">   (TAGS)
            <span class="tag">
                TAG
            </span>
        </div>
    </div>

</div>
 */

// Load Blog Cards
const blogCardsContainer = document.getElementById("blog-cards-container");
window.addEventListener('load', () => {
    // Load each blog cards into home page
    allBlogs.forEach(blog => {
        const cover = blog["cover"];
        const published = blog["published"];
        const summary = blog["summary"];
        const tags = blog["tags"];
        const title = blog["title"];
        const url = blog["url"];

        const blogCard = createBlogCard(cover, published, summary, tags, title, url);
        blogCardsContainer.appendChild(blogCard);
    });

    // Load CSS after blog cards are finished loading
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "./styles/blog_cards.css");
    document.head.appendChild(link);
});