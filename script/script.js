const Main = {
    init: function(){
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors: function(){
        this.$menu = document.querySelector('.menu')
        this.$button_menu = document.querySelector('.button_menu')
        this.$icon_menu = document.querySelector('.icon_menu')
        this.$btnMoreDetails = document.querySelectorAll('.btnMoreDetails')
    },

    bindEvents: function(){
        const self = this
        this.$button_menu.onclick = self.Events.menu_click.bind(this)

        this.$btnMoreDetails.forEach(function(button){
            button.onclick = self.Events.$btnMoreDetails_click
        })
    },

    Events: {
        $btnMoreDetails_click: function(e){
            const icon = e.target
            const div = e.srcElement.parentElement.nextElementSibling
            if (div.classList.contains('not_visible')){
                div.classList.remove('not_visible')
                div.classList.add('visible')

                icon.setAttribute('src', 'icons/arrow_up.svg')
            }
            else if (div.classList.contains('visible')){
               div.classList.remove('visible')
               div.classList.add('not_visible')

               icon.setAttribute('src', 'icons/arrow_down.svg')
            }
        },

        menu_click: function(){
            if (this.$menu.classList.contains('not_visible')){
                this.$menu.classList.remove('not_visible')
                this.$menu.classList.add('visible')

                this.$icon_menu.setAttribute("src", "icons/close.png")
            }

            else if (this.$menu.classList.contains('visible')){
                this.$menu.classList.remove('visible')
                this.$menu.classList.add('not_visible')

                this.$icon_menu.setAttribute("src", "icons/menu-hamburguer.png")
            }
        }
    }
}

Main.init()