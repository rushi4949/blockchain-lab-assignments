let apiKey = "";
let apiSecret = "";

function promptForCredentials() {
    const key = prompt("Enter your Pinata API Key:");
    const secret = prompt("Enter your Pinata API Secret:");
    
    if (key && secret) {
        apiKey = key;
        apiSecret = secret;
        document.getElementById("credentials-status").innerHTML = "Credentials loaded";
        document.getElementById("credentials-status").className = "status success";
    } else {
        document.getElementById("credentials-status").innerHTML = "Please provide both API key and secret";
        document.getElementById("credentials-status").className = "status error";
    }
}

document.getElementById("fileInput").addEventListener("change", function(e) {
    const label = document.getElementById("fileLabel");
    if (this.files.length > 0) {
        label.classList.add("has-file");
        label.querySelector("span:last-child").textContent = this.files[0].name;
    } else {
        label.classList.remove("has-file");
        label.querySelector("span:last-child").textContent = "Choose a file or drag it here";
    }
});

async function uploadFile() {
    if (!apiKey || !apiSecret) {
        promptForCredentials();
        return;
    }

    const file = document.getElementById("fileInput").files[0];
    const resultDiv = document.getElementById("result");

    if (!file) {
        alert("Please select a file");
        return;
    }

    resultDiv.innerHTML = '<span class="status uploading">&#9203; Uploading...</span>';
    resultDiv.classList.add("show");

    const formData = new FormData();
    formData.append("file", file);

    try {
        const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
            method: "POST",
            headers: {
                pinata_api_key: apiKey,
                pinata_secret_api_key: apiSecret
            },
            body: formData
        });

        const data = await res.json();
        const cid = data.IpfsHash;

        resultDiv.innerHTML = `
            <span class="status success">&#10003; Uploaded Successfully!</span><br>
            <b>CID:</b> ${cid}<br>
            <a href="https://gateway.pinata.cloud/ipfs/${cid}" target="_blank">
                &#128279; View File
            </a>
        `;

    } catch (err) {
        console.error(err);
        resultDiv.innerHTML = '<span class="status error">&#10007; Upload Failed</span>';
    }
}

function getFile() {
    const cid = document.getElementById("cidInput").value;

    if (!cid) {
        alert("Enter CID");
        return;
    }

    const url = `https://ipfs.io/ipfs/${cid}`;

    const iframe = document.getElementById("preview");
    iframe.src = url;
    iframe.classList.add("show");

    window.open(url, "_blank");
}
