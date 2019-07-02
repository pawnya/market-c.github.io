$(function() {
    new IsoGrid(document.querySelector('.isolayer--deco1'), {
        transform: 'translate3d(100px, -350px, 0px) scale3d(0.7, 0.8, 0.8) rotateY(0deg) rotateX(30deg) rotateZ(8deg)',
        stackItemsAnimation : {
            properties : function(pos) {
                return {
                    rotateX: (pos+1) * -15
                };
            },
            options : function(pos, itemstotal) {
                return {
                    type: dynamics.spring,
                    delay: (itemstotal-pos-1)*30
                };
            }
        },
    });
});
