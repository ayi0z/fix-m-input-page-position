const install = function(Vue){
  if (install.installed) return
  install.installed = true

  Vue.prototype.fixInputBug = function(){
    let els = document.querySelectorAll('input,select,textarea');
    for(let el of els){
        el.addEventListener('blur', function () {
            window.setTimeout(function () {
                document.activeElement.scrollIntoViewIfNeeded();
            }, 0);
        })
    }
  }

  Vue.mixin({
    mounted(){
      Vue.prototype.fixInputBug()
    }
  })
}

if(typeof window !== 'undefined' && window.Vue){
  install(window.Vue)
}


export default {
  install
}