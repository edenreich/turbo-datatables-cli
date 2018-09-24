<p align="center"><a href="https://datatables.net/examples/styling/bootstrap4"><img src="https://drive.google.com/uc?export=view&id=1BixUms5LUlR6-6TE3tPASyuTE1QtKLC_"></a></p>

# Datatables Node CLI

> The CLI for datatables.


## Todo

- [ ] Add possiblity to import a demo project / setup.


## Testing
To create a demo table and seed some fake data into it:
```sh
datatables seed --table users --records 5000
```

To run a demo server run:
```sh
datatables serve --port 80 --url users --table users
```