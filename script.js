let urls = [
    {
        title: 'Google',
        url: 'https://www.google.com',
        description: '世界最大の検索エンジン'
    },
    {
        title: 'YouTube',
        url: 'https://www.youtube.com',
        description: '動画共有プラットフォーム'
    },
    
    {
        title: 'GitHub',
        url: 'https://github.com',
        description: 'コード管理とコラボレーションのプラットフォーム'
    }
];

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

// ページ読み込み時にURLを表示
displayUrls();