var demo = new Vue({
    el: '#main',
    data: {
        searchString: "",

        // The data model. These items would normally be requested via AJAX,
        // but are hardcoded here for simplicity.

        articles: [
            {
                "title": "Dell",
                "url": "http://www.dell.com",
                "image": "http://close-the-gap.org/wp-content/uploads/2014/09/dell-blue_spot-100x100.jpg"
            },
            {
                "title": "HP",
                "url": "http://www.hp.com",
                "image": "https://media-exp2.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAZTAAAAJDA3OTExODUwLTBlMTMtNDdjYy05YWFhLTg3NzVlY2U0YzZmZA.png"
            },
            {
                "title": "Acer",
                "url": "https://www.acer.com",
                "image": "http://asiaticcomputers.com/image/cache/data/acer_logo-100x100.png"
            },
            {
                "title": "Blackberry",
                "url": "https://us.blackberry.com",
                "image": "http://4827-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2015/06/blackberry-logo.jpg"
            },
            {
                "title": "Itunes",
                "url": "https://www.apple.com/ph/itunes/",
                "image": "https://images.sftcdn.net/images/t_optimized,f_auto/p/c5cb6868-96bf-11e6-b1f3-00163ed833e7/2047722692/itunes-logo.png"
            },
            {
                "title": "Facebook",
                "url": "http://www.facebook.com",
                "image": "https://images.sftcdn.net/images/t_optimized,f_auto/p/8a6eafba-96d2-11e6-b334-00163ec9f5fa/77332936/facebook-logo.png"
            }
        ]
    },
    computed: {
        // A computed property that holds only those articles that match the searchString.
        filteredArticles: function () {
            var articles_array = this.articles,
                searchString = this.searchString;

            if(!searchString){
                return articles_array;
            }

            searchString = searchString.trim().toLowerCase();

            articles_array = articles_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })

            // Return an array with the filtered data.
            return articles_array;;
        }
    }
});