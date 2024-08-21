--Q1
select FirstName , LastName
from Employees
where EmployeeID = 3

--Q2
select ProductName, UnitPrice
from Products
where ProductID = 4

--Q3
select ProductID, ProductName, UnitPrice
from Products
where UnitPrice > 20
order by UnitPrice asc

--Q4
select FirstName + ' ' + LastName as FullName , BirthDate, ReportsTo
from Employees
where EmployeeID = 8

--Q5
select PostalCode, FirstName + ' ' + LastName as FullName, BirthDate
from Employees
where City = 'london'


--Q6
select *
from Products
where UnitPrice between 50 and 100

--Q7
select ProductName, UnitPrice
from Products
where UnitPrice between 21.35 and 43.9
order by UnitPrice desc

--Q8
select EmployeeID, LastName, HireDate
from Employees
where city = 'london' or city = 'tacoma'

--Q9
select EmployeeID, FirstName , LastName
from Employees
where EmployeeID in ( 1 , 2 , 5)

--Q10
select FirstName, LastName, BirthDate
from Employees
where EmployeeID not in (4, 5, 7)

--Q11
select ProductID, ProductName,  CategoryID
from Products
where CategoryID not in (1,2,7)
order by CategoryID


--Q12
select FirstName, Region
from Employees
where Region is null

--Q13
select top 3 ProductName, UnitPrice
from Products
order by UnitPrice desc

--Q14
select OrderID, OrderDate, RequiredDate
from Orders
where RequiredDate > '1996-10-01'

--Q15
select EmployeeID, LastName, ReportsTo
from Employees
where ReportsTo is not null
order by EmployeeID

--Q16
select *
from Categories
where CategoryName like '%c%'

--Q17
select CompanyName, Country
from Customers
where CompanyName like '%a'

--Q18
select ProductName, CategoryID
from Products
where ProductName  like '%a_%'

--Q19
select OrderID, CustomerID, EmployeeID
from Orders
where OrderDate between '1997-04-01' and '1997-05-01'
order by OrderDate , CustomerID  desc

--Q20
select CustomerID, CompanyName,  Country, Phone, Region
from Customers
where Country like 'm%' or  Country like 'k%' or Country like 'g%' and Region is null

--Q21
select EmployeeID, FirstName + ' ' + LastName, BirthDate, Country
from Employees
where LastName like '%[kd]%' or BirthDate between '1963-12-31' and '1963-01-01'

--Q22
select ProductName, UnitPrice, SupplierID
from Products
where UnitPrice > 30 and (SupplierID = 1 or SupplierID = 3)

--Q23
select OrderID, EmployeeID, OrderDate, RequiredDate, ShipName
from Orders
where EmployeeID = 7 and (ShipName like 'QUICK-Stop' or ShipName like 'Du mond entire' or ShipName like 'Eastern Connection') and ((RequiredDate - OrderDate) > 20)


--Q24
select ProductID, ProductName
from Products
where (UnitsInStock not between 10 and 100) and (SupplierID in (8 , 16 , 21) or UnitPrice < 10 )


--------JOIN
--Q1
select ProductName , CategoryName
from Products join Categories
on Products.CategoryID = Categories.CategoryID

--Q2
select ProductName , CompanyName
from Products join Suppliers
on Products.SupplierID = Suppliers.SupplierID

--Q3
select OrderID, CompanyName
from Orders join Customers
on Orders.CustomerID = Customers.CustomerID
where CompanyName like 'a%'

--Q4
select RegionDescription, TerritoryDescription
from Region join Territories
on Region.RegionID = Territories.RegionID

--Q5
select ProductName, CategoryName
from Products join Categories
on Products.CategoryID = Categories.CategoryID
where SupplierID = 3

--Q6
select ProductID, UnitPrice, SupplierID, CategoryName
from Products join Categories
on Products.CategoryID = Categories.CategoryID
where SupplierID = 3

--Q7
select ProductID, UnitPrice, SupplierID, CategoryName
from Products join Categories
on Products.CategoryID = Categories.CategoryID
where CategoryName like '%a%'

--Q8
select ProductName, CategoryName, CompanyName
from Products join Categories
on Products.CategoryID = Categories.CategoryID
join Suppliers
on Products.SupplierID = Suppliers.SupplierID

--Q9
select ProductName, Description, Suppliers.City
from Products join Categories
on Products.CategoryID = Categories.CategoryID
join Suppliers
on Products.SupplierID = Suppliers.SupplierID
where Suppliers.City in ('london' , 'tokyo')

--Q10
select ProductName, Description, Suppliers.Country
from Products join Categories
on Products.CategoryID = Categories.CategoryID
join Suppliers
on Products.SupplierID = Suppliers.SupplierID
where Suppliers.Country like 'a%'

--Q11
select CompanyName, OrderID
from Customers left join Orders
on Customers.CustomerID = Orders.CustomerID

--Q12
select OrderID, OrderDate, ShipAddress, customers.CustomerID, CompanyName, Phone
from Orders join Customers
on Orders.CustomerID = Customers.CustomerID
where (YEAR(OrderDate)=1996) and  (Customers.CustomerID LIKE 'a%' or Customers.CustomerID like 'c%') 

--Q13
select OrderID, OrderDate, ShipAddress, customers.CustomerID, CompanyName, Phone , FirstName + ' ' + LastName as FullName
from Orders join Customers
on Orders.CustomerID = Customers.CustomerID
join Employees
on Orders.EmployeeID = Employees.EmployeeID
where (YEAR(OrderDate)=1996) and  (Customers.CustomerID LIKE 'a%' or Customers.CustomerID like 'c%') 
order by OrderDate desc


-------------GROUP FUNCTIONS

--Q1
select min(LastName)
from employees

--Q2
select max(firstname)
from Employees

--Q3
select count(*)
from Employees

--Q4
select COUNT(region)
from Employees

--Q5
select AVG(UnitPrice)
from Products

--Q6
select max(unitprice) as ' max price' , min(unitprice) as 'min price'
from Products

--Q7
select min (BirthDate) as 'min BirthDate' , max(BirthDate) as 'max BirthDate'
from Employees

--Q8
select count(*) as 'number of customers'
from Customers

--Q9
select distinct count(customerID)
from Orders

--Q10
select max(UnitPrice), min(UnitPrice), AVG(UnitPrice)
from Products
group by CategoryID

--Q11
select products.SupplierID, max(UnitPrice), CompanyName
from Products join Suppliers
on Products.SupplierID = Suppliers.SupplierID
group by Products.SupplierID , CompanyName
order by SupplierID desc

--Q12
select AVG(UnitsInStock)
from Products
group by SupplierID
order by SupplierID desc

--Q13
select count(CustomerID), Country, City
from Customers
group by Country , City

--Q14
select  CategoryID, AVG(UnitPrice)
from Products
where UnitPrice > 40
group by CategoryID

--Q15




--Q16
select max(UnitPrice), min(UnitPrice), AVG(UnitPrice), count(UnitPrice), CategoryID, SupplierID
from Products
group by CategoryID, SupplierID

--Q17
select max(UnitPrice), CategoryID
from Products
group by CategoryID
having max(UnitPrice) > 40

--Q18
select AVG(UnitPrice), SupplierID
from Products
group by SupplierID
having AVG(UnitPrice) > 40

--Q19
select sum(UnitsOnOrder), sum(UnitsInStock), Categories.CategoryID, CategoryName
from Products join Categories
on Products.CategoryID = Categories.CategoryID
where CategoryName like '%c%' 
group by Categories.CategoryID , CategoryName
having sum(UnitsOnOrder) > 100
order by CategoryName

--Q20
select Region, City, count(*)
from Customers
where city like '%[ml]%' and Region is not null
group by Region, City
having count(*)>= 2

--Q21
select LastName , count(orderID), max(orderDate)
from Employees join Orders
on Employees.EmployeeID = Orders.EmployeeID
group by LastName
having count(orderID) > 100

--------------

--Q8
select ABS([UnitPrice])
from [Order Details]

--Q9
select SQRT(EmployeeID) , EmployeeID
from Employees

--Q10
select DATEDIFF (dd,OrderDate,ShippedDate) as duration , ShippedDate, OrderDate
from Orders

--Q11

--Q15


--Q16
select count (*)
from Employees

--Q17
select count (Region)
from Employees

--Q18
select AVG([UnitPrice])
from Products


select top 10 percent customerID 
from Customers
order by customerID desc

select customerID 
from Customers
order by customerID 



--------------SUBQURIES

--Q1
select ProductName , UnitPrice
from Products
where UnitPrice < (select unitprice
                   from Products
                   where ProductID = 8)

--Q2
select ProductName , UnitPrice
from Products
where UnitPrice > (select unitprice
                   from Products
                   where ProductName = 'Tofu')
--Q3
select FirstName, [HireDate]
from Employees
where [HireDate] > (select [HireDate]
                  from Employees
                  where EmployeeID = 6)

--Q4
select ProductID, ProductName, UnitPrice
from Products
where UnitPrice > (select AVG(unitprice)
                   from Products)

--Q5
select ProductName, UnitsInStock
from Products
where UnitsInStock < (select min(UnitsInStock)
                      from Products
                      where CategoryID = 5)

--Q6
select *
from Products
where CategoryID = (select CategoryID
                    from Products
                    where ProductName = 'chai') and ProductName not like 'chai'

--Q7
select ProductName, UnitPrice
from Products
where UnitPrice in (select UnitPrice
                   from Products
                   where CategoryID = 5)

--Q8
select ProductName, UnitPrice
from Products
where UnitPrice > ANY (select MIN(UnitPrice)
                   from Products
                   where CategoryID = 5)

--Q9
select ProductName, UnitPrice
from Products
where UnitPrice >ALL  (select max(UnitPrice)
                   from Products
                   where CategoryID = 5)

--Q10
select OrderID, OrderDate
from Orders
where CustomerID in (select CustomerID
                    from Customers
                    where Country in ('Germany', 'France', 'Sweden'))
	and YEAR(orderDate) = '1997'


--Q11
select ProductName, ProductID
from Products
where UnitPrice > (select AVG (unitprice)
from Products
where UnitsInStock > 50 )


--Q12
select ProductName
from Products
where CategoryID in (select CategoryID
                     from Categories
                      where CategoryName in ('Beverages' , 'Condiments'))
                      and SupplierID in (select SupplierID
                                         from Suppliers
                                         where Region is null)

--Q13
select CompanyName
from Suppliers
where  SupplierID in (select SupplierID
                      from Products
                      where CategoryID in (select CategoryID
                                          from Categories
                                           where CategoryName = ('Beverages')))
