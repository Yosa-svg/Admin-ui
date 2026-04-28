export const user = [
    {
        name: "John Doe",
        email: "johndoe@gmail.com",
        street: "Jl. Mawar No. 12",
        city: "Jakarta",
        age: 25,
        job: "Web Developer",
    },
    {
        name: "Jane Smith",
        email: "janesmith@gmail.com",
        street: "Jl. Melati No. 45",
        city: "Bandung",
    },
    {
        name: "Budi Santoso",
        email: "budi@gmail.com",
        street: "Jl. Merdeka No. 1",
        city: "Semarang",
    }
];

export const newsUser = [
    {
        name: "John Doe",
        email: "johndoe@gmail.com",
        street: "Jl. Mawar No. 12",
        city: "Jakarta",
        age: 25,
        job: "Web Developer",
    },
    {
        name: "Jane Smith",
        email: "janesmith@gmail.com",
        street: "Jl. Melati No. 45",
        city: "Bandung",
    },
    {
        name: "Budi Santoso",
        email: "budi@gmail.com",
        street: "Jl. Merdeka No. 1",
        city: "Semarang",
    }
];

const city = "Jakarta";
const street = "Jl. Mawar No. 12";



export const getUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        return users.map((user) => ({
            name: user.name,
            email: user.email,
        }));
    } catch (error) {
        console.error("[Services] Gagal mengambil data:", error.message);
        throw error;
    }
};