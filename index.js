const usersNode = document.getElementById("users");

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        mountUser(data);
    })
    .catch((e) => console.log(e.message));

function mountUser(users) {
    for (const user of users) {
        console.log(user);
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="border p-4 font-serif rounded-lg">
                    <div class="my-4">
                        <h2 class="text-2xl font-medium">
                            <span class="font-medium capitalize">name: </span>${user?.name}
                        </h2>
                        <h2 class="text-2xl font-medium">
                            <span class="font-medium capitalize">user name: </span
                            >@${user?.userName}
                        </h2>
                    </div>
                    <h3 class="text-xl">
                        <span class="font-medium capitalize">email: </span>${user?.email}
                    </h3>
                    <h3 class="text-xl">
                        <span class="font-medium capitalize">phone: </span>${user?.phone}
                    </h3>
                    <a href="https://${user?.website}" class="text-xl"
                        ><span class="font-medium capitalize">website: </span>${user?.website}</a
                    >
                    <hr class="bg-slate-500 mt-2" />
                    <div class="text-lg my-4">
                        <h3 class="uppercase">Company:</h3>
                        <div class="my-4">
                            <p><span class="font-medium capitalize">name:</span>{name}</p>
                            <p>
                                <span class="font-medium capitalize">catchParse:</span
                                >${user?.catchParse}
                            </p>
                            <p><span class="font-medium capitalize">bs:</span>${user?.bs}</p>
                        </div>
                    </div>
                    <hr class="bg-slate-500 mt-2" />
                    <address class="text-sm my-4 font-mono">
                        <h3 class="uppercase">address:</h3>
                        <div class="flex justify-between items-center my-4">
                            <p>
                                <span class="font-medium capitalize">street:</span>${user?.address?.street}
                            </p>
                            <p>
                                <span class="font-medium capitalize">suite:</span>${user?.address?.suite}
                            </p>
                        </div>
                        <div class="flex justify-between items-center">
                            <p><span class="font-medium capitalize">city:</span>${user?.address?.city}</p>
                            <p>
                                <span class="font-medium capitalize">zip code:</span
                                >${user?.address?.zipcode}
                            </p>
                        </div>
                        <hr class="bg-slate-500 mt-2" />
                        <address class="my-4">
                            <p class="uppercase">geolocation:</p>
                            <div class="my-4">
                                <p>
                                    <span class="font-medium capitalize">latitude:</span
                                    >${user?.address?.geo?.lat}
                                </p>
                                <p>
                                    <span class="font-medium capitalize">longitude:</span
                                    >${user?.address?.geo?.lng}
                                </p>
                            </div>
                        </address>
                    </address>
                </div>
        `;
        usersNode.appendChild(div);
    }
}
