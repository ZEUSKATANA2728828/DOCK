let targetPage = '';

function showPage(pageId) {
    document.querySelectorAll('.page')
        .forEach(p => p.classList.remove('active'));

    document.getElementById(pageId)
        .classList.add('active');
}

function showScriptWarning(scriptPage) {
    targetPage = scriptPage;
    document.getElementById('warning-overlay')
        .classList.add('active');
}

function acceptWarning() {
    document.getElementById('warning-overlay')
        .classList.remove('active');
    showPage(targetPage);
}

function declineWarning() {
    document.getElementById('warning-overlay')
        .classList.remove('active');
    showPage('bloxfruits');
}

function copyScript(codeId, feedbackId) {
    const text = document.getElementById(codeId).textContent;
    const feedback = document.getElementById(feedbackId);

    navigator.clipboard.writeText(text).then(() => {
        feedback.classList.add('show');
        setTimeout(() => {
            feedback.classList.remove('show');
        }, 3000);
    });
}
