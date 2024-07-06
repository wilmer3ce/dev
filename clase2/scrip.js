const sales = JSON.parse(localStorage.getItem('sales')) || [];

document.addEventListener('DOMContentLoaded', function() {
    const saleForm = document.getElementById('sale-form');
    const saleslist = document.getElementById('sales-list');
    const salesSection = document.getElementById('sales');
    const modifyForm = document.getElementById('modify-form');

    if(saleForm) {
        saleForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const description = document.getElementById('description').value;
            const price = parseFloat(document.getElementById('price').value);
            const quantity = parseInt(document.getElementById('quantity').value);
            const total = price * quantity

            const sale = {
                description,
                price,
                quantity,
                total,
                status: 'pendiente'
            };

            sales.push(sale);
            localStorage.setItem('sales', JSON.stringify(sales));
            displaySalesList(saleslist); 
            saleForm.reset();
        });
    }

    if (salesSection) {
        displaySalesList(salesSection);
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
                  sales[index].quantity= quantity;
                  sales[index].total = total;
                  localStorage.setItem('sales', JSON.stringify(sales));

                  window.location.href = 'venta.html';
        });
        const params = new URLSearchParams(window.localStorage.search);
        if (params.has('index')) {
            const index = parseInt(params.get('index'));
            const sale = sale[index];
            document.getElementById('modify-index').value = index;
            document.getElementById('modify-description').value = sale.description;
            document.getElementById('modify-price').value = sale.price;
            document.getElementById('modify-quantity').value = sale.quantity;
        }
    }

});

function displaySales(container) {
    container.inerrHTML = '';
    sales.forEach((sale, index) => {
        const saleDiv = document.createElement('div');
        saleDiv.className = 'grid-item';
        saleDiv.innerHTML = `
                <p>${sale.description}</p>
                <p>precio: $${sale.price}</p>
                <p>cantidad: ${sale.quantity}</p>
                <p>total: $${sale.total}</p>
                <p>status: ${sale.status}</p>
                <button onclick="confirmSale(${index})">confirmar venta</button>
        `;
        container.appendChild(saleDiv);
    });
}
    
    
function displaySalesList(container) {
    container.inerrHTML = '';
    sales.forEach((sale, index) => {
        const saleDiv = document.createElement('div');
        saleDiv.className = 'grid-item';
        saleDiv.innerHTML = `
                <p>${sale.description}</p>
                <p>precio: $${sale.price.toFixed(2)}</p>
                <p>cantidad: ${sale.quantity}</p>
                <p>total: $${sale.total.toFixed(2)}</p>
                <p>status: ${sale.status}</p>
                <button onclick="editSale(${index})">modificar</button>
                <button onclick="deleteSale(${index})">eliminar</button>
        `;
        container.appendChild(saleDiv);
    });
} 
 function confirmaSale(index) {
    sales[index].status = 'procesado';
    localStorage.setItem('sales', JSON.stringify(sales));
    displaySales(document.getElementById('sales'));
 }

 function editSale(index) {
    window.location.href = `modify.html?index=${index}`;
 }
function deleteSale(index) {
    sales.splice(index, 1);
    localStorage.setItem('sales', JSON.stringify(sales));
    displaySalesList(document.getElementById('sales-list'));
}


    

    





    


    


        

