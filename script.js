let urls = [];

// JSONファイルからURLデータを読み込む
async function loadUrls() {
    try {
        const response = await fetch('./urls.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        urls = await response.json();
        displayUrls();
    } catch (error) {
        console.error('URLデータの読み込みに失敗しました:', error);
        const listElement = document.getElementById('urlList');
        if (listElement) {
            listElement.innerHTML = '<div class="empty">URLデータの読み込みに失敗しました。ローカルサーバーを使用してください。</div>';
        }
    }
}

function displayUrls() {
    const listElement = document.getElementById('urlList');
    
    if (urls.length === 0) {
        listElement.innerHTML = '<div class="empty">URLが登録されていません</div>';
        return;
    }
    
    listElement.innerHTML = urls.map((item, index) => `
        <div class="url-item">
            <div class="url-title">${item.title}</div>
            <a href="${item.url}" target="_blank" class="url-link">${item.url}</a>
            <div class="url-description">${item.description}</div>
        </div>
    `).join('');
}

// ページ読み込み時にURLを読み込んで表示
loadUrls();