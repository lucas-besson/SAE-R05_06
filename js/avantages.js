const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer){
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('anim-visible')
            observer.unobserve(entry.target)
        }
      console.log(entry.intersectionRatio)
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="anim-"]').forEach(function (r) {
    observer.observe(r)
})


