insert into users
  (name, username, email, password)
values
  ('John Smith', 'john', 'john@mail.com', 'password'),
  -- ('John Smith', 'john', 'john@mail.com', 'password'),
  ('Guy Fieri', 'flavortown', 'guy@mail.com', 'password');

insert into peopleYouFollow
  (name, username, avg_score, category, reach, user_id)
values 
  ('Donald Trump', '@donaldjtrump', -0.35, 'Politics', 1500000, 1),
  ('Barack Obama', '@barackobama', 1.15, 'Politics', 20000000, 1),
  ('Steven Tyler', '@steventyler', 1.03, 'Musician ', 1000000, 1);

