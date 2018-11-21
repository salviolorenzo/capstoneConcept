#CTT: Check the Temperature
  - See how the people you follow are feeling on any given day
  - Metrics for overall feeling of people based on those sites

## Main purpose:
  - Show users how positive/negative people on the internet are being.

## How?
  - Use APIs to pull data from various social media platforms, send that data to the "node-sentiment library", store post + score + metadata as one object in a table
  - Populate database with the most followed users on each platform
  - Add categories for:
    - Politicians
    - Celebrities
    - Influencers?
  - Cross-reference data with what is being said/written about those people
    - Pull data from news API, search for keywords


## Users
  - Integrate OAuth so users can picked from a pre-populated list of people they follow.
  - Each user has an array of X number of people they "follow"
  - Allow users to customize their platform:
    - Pick any number of people that they want to know about
    - Custom data visualization based on their picked set of people
  - Ability to search for users, see a history of their daily posts, along with a score.

## Future additions
  - Users can connect their own social media, and get a score of their own.

## Technologies needed:
  - Frontend:
    - React.js
    - AngularJS?

  - Backend
    - Node.js
    - Powerful relational database