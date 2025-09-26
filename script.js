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

// URL形式を検証する関数
function isValidUrl(string) {
    try {
        const url = new URL(string);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch (_) {
        return false;
    }
}

// 重複URLをチェックする関数
function isDuplicateUrl(url) {
    return urls.some(item => item.url.toLowerCase() === url.toLowerCase());
}

// URL追加機能
function addUrl() {
    const titleInput = document.getElementById('titleInput');
    const urlInput = document.getElementById('urlInput');
    const descriptionInput = document.getElementById('descriptionInput');
    const errorMessage = document.getElementById('errorMessage');
    
    const title = titleInput.value.trim();
    const url = urlInput.value.trim();
    const description = descriptionInput.value.trim();
    
    // エラーメッセージをクリア
    errorMessage.textContent = '';
    
    // バリデーション
    if (!title || !url || !description) {
        errorMessage.textContent = '全てのフィールドを入力してください';
        return;
    }
    
    // URL形式の検証
    if (!isValidUrl(url)) {
        errorMessage.textContent = '有効なURL形式で入力してください（http://またはhttps://で始まる必要があります）';
        return;
    }
    
    // 重複チェック
    if (isDuplicateUrl(url)) {
        errorMessage.textContent = 'このURLは既に登録されています';
        return;
    }
    
    // URLを追加
    urls.push({
        title: title,
        url: url,
        description: description
    });
    
    // フォームをクリア
    titleInput.value = '';
    urlInput.value = '';
    descriptionInput.value = '';
    
    // リストを再表示
    displayUrls();
}

function deleteUrl(index) {
    urls.splice(index, 1);
    displayUrls();
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
            <button class="delete-btn" onclick="deleteUrl(${index})">削除</button>
        </div>
    `).join('');
}

// ページ読み込み時にURLを表示
displayUrls();