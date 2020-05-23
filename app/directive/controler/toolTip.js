/**
 * TODO: delay, animation function, placement function, inside, tooltip or title,
 * remove standard tooltip from title (break bindings), multiple triggers, html
 * tooltips, selector delegate,
 */
angular.module( 'ui.bootstrap.tooltip', [] )
.directive( 'tooltipPopup', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/directive/view/toolTip.html'
  };
})
.directive( 'tooltip', function ( $compile, $timeout ) {
  
  var template = 
    '<tooltip-popup></tooltip-popup>';
  
  return {
    scope: { tooltipTitle: '@tooltip', placement: '@tooltipPlacement', animation: '&tooltipAnimation' },
    link: function ( scope, element, attr ) {
      var tooltip = $compile( template )( scope ), 
          transitionTimeout;
      
      // Calculate the current position and size of the directive element.
      function getPosition() {
        return {
          width: element.prop( 'offsetWidth' ),
          height: element.prop( 'offsetHeight' ),
          top: element.prop( 'offsetTop' ),
          left: element.prop( 'offsetLeft' )
        };
      }
      
      // Show the tooltip popup element.
      function show() {
        var position,
            ttWidth,
            ttHeight,
            ttPosition;
          
        // If no placement was provided, default to 'top'.
        scope.placement = scope.placement || 'top';
        
        // If there is a pending remove transition, we must cancel it, lest the
        // toolip be mysteriously removed.
        if ( transitionTimeout ) $timeout.cancel( transitionTimeout );
        
        // Lazy compile the tooltip element
        // FIXME: For some reason, this does *not* always work correctly on the 
        // *first* run, but does so on all subsequent runs.
        //tooltip = tooltip ||  $compile( template )( scope );
        
        // Set the initial positioning.
        tooltip.css({ top: 0, left: 0, display: 'block' });
        
        // Now we add it to the DOM because need some info about it. But it's not 
        // visible yet anyway.
        element.after( tooltip );
        
        // Get the position of the directive element.
        position = getPosition();
        
        // Get the height and width of the tooltip so we can center it.
        ttWidth = tooltip.prop( 'offsetWidth' );
        ttHeight = tooltip.prop( 'offsetHeight' );
        
        // Calculate the tooltip's top and left coordinates to center it with
        // this directive.
        switch ( scope.placement ) {
          case 'right':
            ttPosition = {
              top: (position.top + position.height / 2 - ttHeight / 2) + 'px',
              left: (position.left + position.width) + 'px'
            };
            break;
          case 'bottom':
            ttPosition = {
              top: (position.top + position.height) + 'px',
              left: (position.left + position.width / 2 - ttWidth / 2) + 'px'
            };
            break;
          case 'left':
            ttPosition = {
              top: (position.top + position.height / 2 - ttHeight / 2) + 'px',
              left: (position.left - ttWidth) + 'px'
            };
            break;
          default:
            ttPosition = {
              top: (position.top - ttHeight) + 'px',
              left: (position.left + position.width / 2 - ttWidth / 2) + 'px'
            };
            break;
        }
        
        // Now set the calculated positioning.
        tooltip.css( ttPosition );
          
        // And show the tooltip.
        scope.isOpen = true;
      }
      
      // Hide the tooltip popup element.
      function hide() {
        // First things first: we don't show it anymore.
        //tooltip.removeClass( 'in' );
        scope.isOpen = false;
        
        // And now we remove it from the DOM. However, if we have animation, we 
        // need to wait for it to expire beforehand.
        // FIXME: this is a placeholder for a port of the transitions library.
        if ( angular.isDefined( scope.animation ) && scope.animation() ) {
          transitionTimeout = $timeout( function () { tooltip.remove(); }, 999 );
        } else {
          tooltip.remove();
        }
      }
      
      // Register the event listeners.
      element.bind( 'mouseenter', function() {
        scope.$apply( show );
      });
      element.bind( 'mouseleave', function() {
        scope.$apply( hide );
      });
    }
  };
});