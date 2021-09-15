
// 화면 전환
function pageTransition(nodeList) {
    nodeList.forEach(a => {
        const href = a.getAttribute("href");
        const hash = a.hash || "tmp";
    
        href && href[0] !== "#" && a.target !== "_blank" && a.href !== `${location.protocol}//${location.hostname}${location.pathname}${hash}` && (
            a.addEventListener("click", e => {
                e.preventDefault(),
        
                setTimeout(() => {
                        body.classList.contains("hidden") && (
                            location.href = href
                        )
                }, 800),
                body.classList.add("hidden")
            })
       )
    })
}

// 페이지에 있는 모든 a 태그에 클릭 이벤트 추가
pageTransition(document.querySelectorAll("a"));
// 자바스크립트 등으로 페이지에 요소가 추가될 때마다 이벤트를 해당 요소에 추가해주셔야 한다.

//페이지가 로딩됐을 때 애니메이션을 표시할 수 있도록
document.body.classList.add("reveal");