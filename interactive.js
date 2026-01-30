// 1. DATA: Add your essays here
const essays = [
{
    id: "pursuit",
    genre: "philosophy",
    title: "The Fall",
    preview: "A Deconversion Story",
    content: `
        <p class="indented">For years, I have deconstructed every system and ideology I encountered. 
        I pulled at assumptions, incentives, and power structures until they came apart in my hands.
        What remained was not liberation, but absence. 
        That process left a void—a chasm where identity should be.
        I exist now as a physical being suspended in air, with no foundation beneath me, 
        no structure sturdy enough to stand on without collapsing under my own scrutiny.</p>

        <section class="quote reveal">
            <blockquote>"What is a man that does not know himself?"</blockquote>
        </section>

        <p class="indented">Rebuilding requires an honest inventory of what has been destroyed: a careful sorting
        of the rubble of who we were so that what remains is chosen, not inherited. To understand the present self,
        one must first account for what was inherited before authorship was possible. I was born in September of 1997;
        my mother was only sixteen, and my father was eighteen. I am unable to recall any values they personally instilled in me;
        those were largely left to religion and schooling. Both identified as Christian, yet neither practiced religion.
        That responsibility was delegated to the private Christian school I attended from kindergarten through my junior year
        of high school.</p>

        <p class="indented">Each morning before class at 8:30 a.m., there was Bible class. Every Wednesday, chapel service
        replaced it. I did not merely attend these classes and services; I excelled in them. I participated wholeheartedly.
        I remember being fourteen during one such chapel service when students were asked to bow their heads and close their eyes.
        Those who wished to invite Jesus Christ into their hearts were instructed to raise their hands. A prayer of salvation
        followed, led by the pastor. Afterwards, he asked who was willing to stand and publicly proclaim their faith.
        With tears in my eyes, I stood, declaring that I had been saved. Around this time, I also entertained the idea of becoming
        a pastor, that is how seriously I took my faith.</p>

        <p class="indented">Fast forward to my freshman or sophomore year: I was asked to write an essay for my Bible class.
        The assignment was to describe what would happen in the world if God did not exist. It was with this question that I began to realize...</p>
    `.trim(),
}
,
    {
        id: 'pacifist',
        genre: 'politics',
        title: 'The Modern Pacifist',
        preview: 'No Content Yet',
        content: '<p> Check Back Later...</p>'
    },
    
    
];

let currentGenre = '';

// 2. CORE NAVIGATION
function showLanding() {
    hideAll();
    document.getElementById('landing-page').classList.remove('hidden');
    window.scrollTo(0,0);
}

function showGenre(genre) {
    hideAll();
    currentGenre = genre;
    const list = document.getElementById('essay-list');
    const genreTitle = document.getElementById('genre-title');
    
    // Capitalize the title properly (The Why)
    genreTitle.innerText = genre.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    if (genre === 'the-why') {
        // This creates your "Solid About Page" layout
        list.innerHTML = `
            <article class="content">
                <p class="reveal">This is my personal journey into philosophy and politics to find myself.</p>
                
                <p class="reveal"> </p>

            <section class="quote reveal">
                    <blockquote>"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."</blockquote>
                    <cite>— Albert Camus</cite>
                </section>
            </article>
        `;
    } else {
        // Standard logic for Philosophy and Politics
        const filtered = essays.filter(e => e.genre === genre.toLowerCase());
        if (filtered.length === 0) {
            list.innerHTML = `<p class="meta">No essays here yet.</p>`;
        } else {
            list.innerHTML = filtered.map(e => `
                <div class="essay-card reveal" onclick="openFullEssay('${e.id}')">
                    <p class="meta">Read</p>
                    <h3>${e.title}</h3>
                    <p class="card-preview">${e.preview}</p>
                </div>
            `).join('');
        }
    }

    document.getElementById('genre-view').classList.remove('hidden');
    setTimeout(revealOnScroll, 50);
}

function openFullEssay(id) {
    hideAll();
    const essay = essays.find(e => e.id === id);
    const target = document.getElementById('article-target');
    
    target.innerHTML = `
        <header class="hero">
            <h1>${essay.title}</h1>
        </header>
        <article class="content">${essay.content}</article>
    `;
    
    document.getElementById('full-article').classList.remove('hidden');
    window.scrollTo(0, 0);
    setTimeout(revealOnScroll, 50);
}

function backToGenre() {
    showGenre(currentGenre);
}

function hideAll() {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('genre-view').classList.add('hidden');
    document.getElementById('full-article').classList.add('hidden');
}

// 3. SCROLL EFFECTS
window.onscroll = function() {
    // Progress Bar
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";

    revealOnScroll();
};

function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}
// This ensures your landing page is visible immediately when someone visits
document.addEventListener('DOMContentLoaded', () => {
    showLanding();
});

// Initial call

revealOnScroll();

















