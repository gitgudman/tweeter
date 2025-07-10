/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac"
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants"
    },
    created_at: 1461116232227
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd"
    },
    content: {
      text: "Je pense , donc je suis"
    },
    created_at: 1461113959088
  }
];

// This function loops through the array of tweets and appends them to the container
const renderTweets = function(tweets) {
  $('#tweets-container').empty(); // Clear out existing tweets
  for (const tweet of tweets) {
    const $tweetElement = createTweetElement(tweet);
    $('#tweets-container').append($tweetElement);
  }
};

// This function builds the tweet DOM element from the tweet object
const createTweetElement = function(tweet) {
  const $tweet = $(`
    <article class="tweet">
      <header>
        <div class="avatar-name">
          <img src="${tweet.user.avatars}" alt="avatar">
          <span class="name">${tweet.user.name}</span>
        </div>
        <span class="user-handle">${tweet.user.handle}</span>
      </header>

      <p>${$("<div>").text(tweet.content.text).html()}</p>

      <div class="divider"></div>

      <footer>
        <span class="timestamp">${timeago.format(tweet.created_at)}</span>
        <div class="tweet-icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </article>
  `);
  return $tweet;
};

// Call it to render hardcoded tweets
$(document).ready(function() {
  renderTweets(data);
});
