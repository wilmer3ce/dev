const sales = [];

document.addEventListener('DOMContentLoaded', function() {
    const saleForm = document.getElementById('sale-form');
    const salesList = document.getElementById('sales-list');
    const salesSection = document.getElementById('sales');

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
            displaySalesList(salesList);
            saleForm.reset();
        });
    }

    if (salesSection) {
        displaySales(salesSection);
    }
});

function displaySalesList(container) {
    container.innerHTML = '';
    sales.forEach((sale, index) => {
        const saleDiv = document.createElement('div');
        saleDiv.className = 'grid-item';
        saleDiv.innerHTML = `
            <p>${sale.description}</p>
            <p>Precio: $${sale.price}</p>
            <p>Cantidad: ${sale.quantity}</p>
            <p>Total: $${sale.total}</p>
            <p>Estado: ${sale.status}</p>
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
            <p>${sale.description}</p>
            <p>Precio: $${sale.price}</p>
            <p>Cantidad: ${sale.quantity}</p>
            <p>Total: $${sale.total}</p>
            <p>Estado: ${sale.status}</p>
            <button onclick="confirmSale(${index})">Confirmar Venta</button>
        `;
        container.appendChild(saleDiv);
    });
}

function confirmSale(index) {
    sales[index].status = 'Procesado';
    displaySales(document.getElementById('sales'));
}
