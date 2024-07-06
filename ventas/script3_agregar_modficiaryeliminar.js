const sales = JSON.parse(localStorage.getItem('sales')) || [];

document.addEventListener('DOMContentLoaded', function() {
    const saleForm = document.getElementById('sale-form');
    const salesList = document.getElementById('sales-list');
    const salesSection = document.getElementById('sales');
    const modifyForm = document.getElementById('modify-form');

    if (saleForm) {
        saleForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const description = document.getElementById('description').value;
            const price = parseFloat(document.getElementById('price').value);
            const quantity = parseInt(document.getElementById('quantity').value);
            const total = price * quantity;

            const sale = {
                description,
                price,
                quantity,
                total,
                status: 'Pendiente'
            };

            sales.push(sale);
            localStorage.setItem('sales', JSON.stringify(sales));
            displaySalesList(salesList);
            saleForm.reset();
        });

        displaySalesList(salesList);
    }

    if (salesSection) {
        displaySales(salesSection);
    }

    if (modifyForm) {
        modifyForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const index = parseInt(document.getElementById('modify-index').value);
            const description = document.getElementById('modify-description').value;
            const price = parseFloat(document.getElementById('modify-price').value);
            const quantity = parseInt(document.getElementById('modify-quantity').value);

            sales[index].description = description;
            sales[index].price = price;
            sales[index].quantity = quantity;
            sales[index].total = price * quantity;
            localStorage.setItem('sales', JSON.stringify(sales));

            window.location.href = 'venta.html';
        });

        const params = new URLSearchParams(window.location.search);
        if (params.has('index')) {
            const index = parseInt(params.get('index'));
            const sale = sales[index];
            document.getElementById('modify-index').value = index;
            document.getElementById('modify-description').value = sale.description;
            document.getElementById('modify-price').value = sale.price;
            document.getElementById('modify-quantity').value = sale.quantity;
        }
    }
});

function displaySalesList(container) {
    container.innerHTML = '';
    sales.forEach((sale, index) => {
        const saleDiv = document.createElement('div');
        saleDiv.className = 'grid-item';
        saleDiv.innerHTML = `
            <p>Descripción: ${sale.description}</p>
            <p>Precio: $${sale.price.toFixed(2)}</p>
            <p>Cantidad: ${sale.quantity}</p>
            <p>Total: $${sale.total.toFixed(2)}</p>
            <p>Estado: ${sale.status}</p>
            <button onclick="editSale(${index})">Modificar</button>
            <button onclick="deleteSale(${index})">Eliminar</button>
        `;
        container.appendChild(saleDiv);
    });
}

function displaySales(container) {
    container.innerHTML = '';
    sales.forEach((sale, index) => {
        const saleDiv = document.createElement('div');
        saleDiv.className = 'grid-item';
        saleDiv.innerHTML = `
            <p>Descripción: ${sale.description}</p>
            <p>Precio: $${sale.price.toFixed(2)}</p>
            <p>Cantidad: ${sale.quantity}</p>
            <p>Total: $${sale.total.toFixed(2)}</p>
            <p>Estado: ${sale.status}</p>
            <button onclick="confirmSale(${index})">Confirmar Venta</button>
        `;
        container.append
        container.appendChild(saleDiv);
    });
}

function editSale(index) {
    window.location.href = `modify.html?index=${index}`;
}

function deleteSale(index) {
    sales.splice(index, 1);
    localStorage.setItem('sales', JSON.stringify(sales));
    displaySalesList(document.getElementById('sales-list'));
}

function displaySales(container) {
    container.innerHTML = '';
    sales.forEach((sale, index) => {
        const saleDiv = document.createElement('div');
        saleDiv.className = 'grid-item';
        saleDiv.innerHTML = `
            <p>Descripción: ${sale.description}</p>
            <p>Precio: $${sale.price.toFixed(2)}</p>
            <p>Cantidad: ${sale.quantity}</p>
            <p>Total: $${sale.total.toFixed(2)}</p>
            <p>Estado: ${sale.status}</p>
            <button onclick="confirmSale(${index})">Confirmar Venta</button>
        `;
        container.appendChild(saleDiv);
    });
}

function confirmSale(index) {
    sales[index].status = 'Procesado';
    localStorage.setItem('sales', JSON.stringify(sales));
    displaySales(document.getElementById('sales'));
}
