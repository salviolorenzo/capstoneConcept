create table users (
  id serial primary key,
  name varchar (30) not null,
  username varchar (30) not null,
  email varchar (100) not null unique,
  password varchar (300) not null
);

create table peopleYouFollow (
  id serial primary key,
  name varchar (100),
  username varchar (100),
  avg_score float,
  category varchar (20),
  reach integer,
  user_id integer references users (id)
);

create table posts (
  id serial primary key,
  content varchar(1000),
  score float,
  date timestamp,
  owner_id integer references peopleYouFollow (id)
);

create table news (
  id serial primary key,
  title varchar (100),
  content text,
  score float
);