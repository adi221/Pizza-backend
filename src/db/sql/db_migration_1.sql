create table schema_version (
  version text not null
);

create table users (
  id bigserial not null,
  "firstName" varchar(40) not null,
  "lastName" varchar(40) not null,
  email varchar(255) not null unique,
  password varchar not null,
  "createdAt" timestamp with time zone not null default now(),
  "updatedAt" timestamp with time zone null,
  "isDeleted" bool not null default false,
  primary key (id)
);

create table meals (
  id bigserial not null,
  title varchar(40) not null unique,
  subtitle varchar(255),
  price int not null,
  toppings jsonb not null default '[]'::jsonb,
  "imageUrl" varchar(255) not null,
  "isDeleted" bool not null default false,
  primary key (id)
);

create table orders (
  id bigserial not null,
  "userId" bigserial not null,
  list jsonb not null default '[]'::jsonb,
  "isActive" bool not null default true
);
-- ref key from userId to users

insert into meals (title, subtitle, price, toppings, "imageUrl")
values
  ('Meat Mix Pizza', 'Ham and Pepperoni', 12, '[{"name":"Tomato"},{"name":"Mozzarella"},{"name":"Basil"}]', 'https://www.bacinos.com/wp-content/uploads/2021/05/27-Meat-Lovers-Pizza-Recipes.jpg'),
  ('Margherita', 'Tomato, Mozzarella, Basil', 9, '[{"name":"Tomato"},{"name":"Mozzarella"},{"name":"Basil"}]', 'https://5.imimg.com/data5/SELLER/Default/2022/9/OC/ZR/IY/91775557/plant-based-vegan-mozzarella-cheese-1000x1000.png'),
  ('Pepperoni', 'Tomato, Mozzarella, Pepperoni', 12, '[{"name":"Tomato"},{"name":"Mozzarella"},{"name":"Pepperoni"}]', 'https://thumbs.dreamstime.com/b/pepperoni-pizza-top-view-cut-pieces-pepperoni-pizza-top-view-cut-pieces-isolated-white-170997851.jpg'),
  ('Vegetarian', 'Tomato, Mozzarella, Bell Peppers, Onions, Mushrooms', 11, '[{"name":"Tomato"},{"name":"Mozzarella"},{"name":"Bell Peppers"},{"name":"Onions"},{"name":"Mushrooms"}]', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-I7DVHtbx-WXxNHOT6MLyz3Qo3fXuhh7uBwI073Lz&s'),
  ('Hawaiian', 'Tomato, Mozzarella, Pineapple, Ham', 13, '[{"name":"Tomato"},{"name":"Mozzarella"},{"name":"Pineapple"},{"name":"Ham"}]', 'https://thumbs.dreamstime.com/b/whole-isolated-italian-hawaiian-pizza-topped-pineapple-ham-mozzarella-cheese-tomato-topping-thick-pie-crust-80010915.jpg'),
  ('Meat Lovers', 'Tomato, Mozzarella, Pepperoni, Sausage, Bacon, Ham', 15, '[{"name":"Tomato"},{"name":"Mozzarella"},{"name":"Pepperoni"},{"name":"Sausage"},{"name":"Bacon"},{"name":"Ham"}]', 'https://media.istockphoto.com/id/1349560404/photo/meat-lover-pizza-with-pepperoni-ham-and-sausage.jpg?s=612x612&w=0&k=20&c=L_oKN9IHQ5LqpiBI8Jy8fIDVl4W2R2jX21hbuWZX5tU='),
  ('BBQ Chicken', 'BBQ Sauce, Mozzarella, Chicken, Red Onion, Cilantro', 14, '[{"name":"BBQ Sauce"},{"name":"Mozzarella"},{"name":"Chicken"},{"name":"Red Onion"},{"name":"Cilantro"}]', 'https://thumbs.dreamstime.com/b/chicken-pizza-pan-spicy-125364336.jpg');