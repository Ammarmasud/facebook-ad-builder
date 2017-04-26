app.directive("adPreview", function() {
  return {
    template:
      `<div class='panel panel-default'>
        <div class='panel-body'>

          <div class='header media'>
            <div class='media-left'>
              <img class='profile-pic' src='images/profilePic.png'>
            </div>

            <div class='media-body'>
              <h5 class='header'>
                <strong>{{storeName}}</strong><br>
                <small class='grey'>Sponsored · <i class='icon ion-earth grey'></i></small>
              </h5>
            </div>

            <div class='media-right header'>
              <i class='icon ion-thumbsup big-icon'></i>
            </div>
          </div>

          <p>{{adText}}</p>

          <div class='panel panel-default'>
            <div class='fullPic-container'>
              <img ng-src='images/{{selectedImage}}' class='fullPic'>
            </div>

            <div class='adImage-content'>
              <div class='adImage-text-container alignTwoThirds'>
                <h5>
                  <strong>{{urlTitle}}</strong><br>
                </h5>
                <h6>
                  {{urlDescription}}<br>
                  <span class='grey'>{{url}}</span>
                </h6>
              </div>

              <div class='adImage-btn-container alignThird'>
                <button type='button' class='btn btn-default ad-btn btn-sm'>
                  <strong>Learn More</strong>
                </button>
              </div>
            </div>
            <div class='cl'></div>
          </div>

          <div class='text-right grey'>5 Comments  17 Shares</div>
        </div>

        <div class='panel-footer'>

          <div class='alignThird'>
            <i class='icon ion-thumbsup grey'></i>
            Like
          </div>
          <div class='alignThird'>
            <i class='icon ion-chatbox grey'></i>
            Comment
          </div>
          <div class='alignThird'>
            <i class='icon ion-forward grey'></i>
            Share
          </div>
          <div class='cl'></div>

        </div>
      <div>`
  };
});