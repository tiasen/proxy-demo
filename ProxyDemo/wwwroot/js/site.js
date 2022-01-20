// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.querySelector('.js-fetch-btn').addEventListener('click', async () => {
    const val = await fetch('/api/demo').then(res => res.text());
    
    document.querySelector('.result').textContent = val;
})