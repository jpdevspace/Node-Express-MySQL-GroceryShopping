+function($) {
    $(function() {
        const shoppingList = {
            init () {
                this.domCache();
                this.eventBinding();
            },
            domCache () {
                this.$pending = $('#pending');
                this.$completed = $('#completed');
                this.$message = $('#message');
                this.$btnSubmit = $('#btnSubmit');
            },
            eventBinding () {
                this.$pending.on('click', 'i.fa-times', this.removeItem.bind(this));
                this.$completed.on('click', 'i.fa-times', this.removeItem.bind(this));
                this.$pending.on('click', "i.fa-check", this.purchased.bind(this));
                this.$btnSubmit.on('click', this.addItem.bind(this));
            },
            addItem () {
                this.customMessage("Item added");
            },
            removeItem (e) {
                e.preventDefault();
                const $itemId = $(e.target).attr('data-mapid');
     
                $.ajax({
                    type: 'DELETE',
                    url: `/delete/${$itemId}`,  // $.ajax DELETE methods can't send data on body
                    success: response => {
                        this.customMessage("Item removed");
                        location.reload();  // Reloads the page. So Handlebars rerenders the view to include updated db
                    },
                    error: () => {
                        alert('There was an error with your request, please try again');
                    }
                });
            },
            purchased (e) {
                e.preventDefault();
                const $itemId = $(e.target).attr('data-mapid');

                $.ajax({
                    type: 'POST',
                    url: '/purchased',
                    data: { itemId: $itemId },
                    success: response => {
                        this.customMessage("Item purchased");
                        location.reload();  // Reloads the page. So Handlebars rerenders the view to include updated db
                    },
                    error: () => {
                        alert('There was an error with your request, please try again');
                    }
                });
            },
            customMessage (msg) {
                // Alert the user
                this.$message.text(msg);
                this.$message.addClass("show");
                // Hide the alert
                setTimeout(this.hideMessage.bind(this), 2000);
            },
            hideMessage () {
                this.$message.removeClass("show");
            }
        }
        shoppingList.init();
    });
}(jQuery)