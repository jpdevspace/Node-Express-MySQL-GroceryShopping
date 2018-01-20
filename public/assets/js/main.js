+function($) {
    $(function() {
        const shoppingList = {
            init() {
                this.domCache();
                this.eventBinding();
            },
            domCache() {
                this.$pending = $('#pending');
                this.$completed = $('#completed');
                this.$message = $('#message');
            },
            eventBinding() {
                this.$pending.on('click', 'i.fa-times', this.removeItem.bind(this));
                this.$completed.on('click', 'i.fa-times', this.removeItem.bind(this));
                this.$pending.on('click', "i.fa-check", this.purchased.bind(this));
            },
            removeItem(e) {
                e.preventDefault();
                const $itemId = $(e.target).attr('data-mapid');
     
                $.ajax({
                    type: 'POST',
                    url: '/complete',
                    data: { itemId: $itemId },
                    success: response => {
                        // Remove element from DOM
                        $(e.target).closest('a.list-group-item').remove();
                        // Alert the user
                        this.$message.text("Item removed");
                        this.$message.addClass("show");
                        // Hide the alert
                        setTimeout(this.hideMessage.bind(this), 2000);
                    }
                });
            },
            hideMessage() {
                this.$message.removeClass("show");
            }
        }

        shoppingList.init();
    });
}(jQuery)