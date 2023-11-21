# Digital Closet

## User Stories
AAU, I want to
- Sign up, sign in, and sign out
- Upload multiple photos of items
- Create categories for clothing items
- have CRUD functions for categories
- have CRUD functions for clothing items
- Add, update, and delete comments on items

## Ice Box

## Technologies Used
- Express.js
- Mongoose
- MongoDB
- JavaScript
- React
- AWS S3
- Postman

## API
### Authentication
| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/register`            | `users#signup`    |
| POST   | `/login`               | `users#signin`    |
| PATCH  | `/change-password`     | `users#changepw`  |
| DELETE | `/logout`              | `users#signout`   |

### Category
| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET    | `/categories`          | `category#index`  |
| GET    | `/categories/<cat_id>` | `category#show`   |
| POST   | `/categories`          | `category#create` |
| PATCH  | `/categories/<cat_id>` | `category#update` |
| DELETE | `/categories/<cat_id>` | `category#delete` |

### Product
| Verb   | URI Pattern             | Controller#Action |
|--------|-------------------------|-------------------|
| GET    | `/products`             | `product#index`   |
| GET    | `/products/<product_id>`| `product#show`    |
| POST   | `/products`             | `product#create`  |
| PATCH  | `/products/<product_id>`| `product#update`  |
| DELETE | `/products/<product_id>`| `product#delete`  |

## Wireframe

![layout wireframe](https://i.imgur.com/SMhx1D3.jpg)
![layout wireframe](https://i.imgur.com/jWNFG8M.jpg)

## ERD