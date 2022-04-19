function tabSelector(...tabs) {
    const root = document.createElement('section');
    root.classList.add('tab-selector');

    const tabButtons = document.createElement('section');
    tabButtons.classList.add('tab-buttons');

    const tabBodies = document.createElement('section');
    tabBodies.classList.add('tab-bodies');

    for (const tab of tabs) {
        const tabButton = tab.tabButton;
        const tabBody = tab.tab;

        tabBody.setAttribute('hidden', true);

        tabButton.addEventListener('click', () => {
            for (const tab of tabs) {
                tab.tabButton.classList.remove('selected');
                tab.tab.setAttribute('hidden', true);
            }

            tabButton.classList.add('selected');
            tabBody.removeAttribute('hidden');
        });

        tabButtons.appendChild(tabButton);
        tabBodies.appendChild(tabBody);
    }

    tabs[0].tabButton.classList.add('selected');
    tabs[0].tab.removeAttribute('hidden');

    root.appendChild(tabButtons);
    root.appendChild(tabBodies);

    return root;
}

class Tab {
    tabButton;
    tab;

    constructor(title) {
        this.tabButton = document.createElement('button');
        this.tabButton.classList.add('tab-button');
        this.tabButton.innerText = title;

        this.tab = document.createElement('section');
        this.tab.classList.add('tab-body');
    }
}

console.log('test');

const body = document.body;

const html = `
    <header>
        <h1>My Restaurant</h1>
    </header>
    <main>
        The best restaurant in town
    </main>
`;

const home = new Tab('Home');
home.tab.innerHTML = html;
const menu = new Tab('Menu');
const contact = new Tab('Contact');

body.appendChild(tabSelector(home, menu, contact));