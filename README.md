# 🎬 Movie App (Netflix)

## 📌 Project Description

This is a **Movie Management Web Application** built using **Node.js, Express.js, MongoDB, and EJS**.
It allows users to **add, view, edit, and delete movies**, along with uploading movie images using **Multer**.

The UI is inspired by a **Netflix-style layout**.

---

## 🚀 Features

* ➕ Add new movies with image upload
* 📋 View all movies
* ✏️ Edit movie details
* ❌ Delete movies
* 🖼️ Upload and display images using Multer
* 🎨 Netflix-style banner UI
* 📄 Movie detail page

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB (Mongoose)
* EJS (Template Engine)
* Multer (for file upload)
* HTML, CSS

---

## 📁 Folder Structure

```
Movie-app/
│
├── config/
│   ├── db.js
│   ├── multer.js
│
├── controllers/
│   └── movieControllers.js
│
├── models/
│   └── movie.js
│
├── router/
│   └── movieRouters.js
│
├── public/
│   └── assets/
│       ├── css/
│       ├── images/
│       └── uploads/
│
├── views/
│   ├── add.ejs
│   ├── edit.ejs
│   ├── index.ejs
│   ├── movieDetail.ejs
│   ├── viewAll.ejs
│   ├── header.ejs
│   └── footer.ejs
│
├── app.js
├── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Install dependencies

```
npm install
```

### 2️⃣ Install required packages (if missing)

```
npm install express mongoose ejs multer
```

---

### 3️⃣ Start MongoDB

Make sure MongoDB is running on:

```
mongodb://127.0.0.1:27017/movieApp
```

---

### 4️⃣ Run the project

```
node app.js
```

OR (auto restart)

```
npx nodemon app.js
```

---

### 5️⃣ Open in browser

```
http://localhost:9000
```

---

## 📸 How It Works

* User adds movie → data saved in MongoDB
* Image uploaded → stored in `/public/assets/uploads`
* Movies displayed dynamically using EJS
* CRUD operations handled via Express routes

---

## ⚠️ Important Notes

* Make sure `uploads` folder exists:

```
public/assets/uploads/
```

* Form must include:

```
enctype="multipart/form-data"
```

* Static files setup:

```js
app.use(express.static("public"));
```

---

## 🎯 Conclusion

This project demonstrates:

* Full CRUD operations
* File upload handling
* MVC architecture
* Dynamic UI rendering

---

## 👨‍💻 Author

**Your Name**

---
<img width="197" height="276" alt="youth" src="https://github.com/user-attachments/assets/6f089b67-eb4c-4918-9e44-9314714363d1" />
<img width="197" height="276" alt="toaster" src="https://github.com/user-attachments/assets/07ab0748-36da-42dd-a977-5d813b294e1d" />
<img width="1898" height="946" alt="Screenshot 8" src="https://github.com/user-attachments/assets/60956789-374c-46cc-8ab9-c827f846e32b" />
<img width="1907" height="1028" alt="Screenshot 7" src="https://github.com/user-attachments/assets/6871c276-5285-475a-bab3-b25813ffd989" />
<img width="1894" height="965" alt="Screenshot 6" src="https://github.com/user-attachments/assets/c787a360-e23c-4a4b-9931-b5ed13b7feb1" />
<img width="1905" height="959" alt="Screenshot 5" src="https://github.com/user-attachments/assets/5c00b848-109d-4be9-a860-80e8092a505d" />
<img width="1901" height="961" alt="Screenshot 4" src="https://github.com/user-attachments/assets/db695750-f5cd-4349-b5e3-d4fb38521ee1" />
<img width="1899" height="931" alt="Screenshot 3" src="https://github.com/user-attachments/assets/7bfdddbc-0362-48b8-99ac-f03c0599ea8d" />
<img width="1889" height="970" alt="Screenshot 2" src="https://github.com/user-attachments/assets/5427dfb8-9d97-4a7b-9353-5c49a0283804" />
<img width="1888" height="1014" alt="Screenshot 1" src="https://github.com/user-attachments/assets/7c09d6b5-b4d9-43bf-9140-83922130a887" />
