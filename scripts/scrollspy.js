$('#fixed-sidebar').affix({
            offset: {
                top: 0,
                bottom: ($('footer').outerHeight(true) + $('.affix-end').outerHeight(true)) + 30
            }
        });
