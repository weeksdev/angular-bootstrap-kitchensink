angular.module('app').component('componentName', {
    templateUrl: 'path/to/component-name.html',
    controller: function (modalCodeFactory) {
        var ctrl = this;
        ctrl.records = [{
            firstName: 'John',
            lastName: 'Lennon',
            instrument: 'Guitar',
            membershipStartYear: new Date('1960-01-01'),
            membershipEndYear: new Date('1969-01-01'),
            imgSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAOAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAABgQFAQIHA//EAC4QAAEDAwIEBQQCAwAAAAAAAAECAwQABRESIQYTMWEyQVGBkRRCcaEiwQdygv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCzcexnJqrmTdIJJ2FbSVr3qBb2EXGdLRId5bMZvKlDrk75H4GPc+dAXKSI9tTLxJUtR8IYOnSOp1Z2+Kr4t0hXRstgyoshIyFAhxKvbAI/del4nSHbcLaxFc5Gyjyz0H2g7bqP91pbuGLjALUzShLyW+cELTn+PoR3FBIEC5MshUhLTyCMpdYcCsjunxA+1QHnCRjNevEU2C1KXD5ZS6y5lMhvYp7d8fNVSJK3kq1kFxJwrHmfWgka+9FRlOHIFFA5PrNLzbyufJdRrTrKkf7HGAB8VfO4wTmqmHClXHiu3x2m0cvWNlKKUqA3IzuehxnFA8cGxUTw3NLWUrQNO2dCkkfvr8U5IjJkc119AS5qIOU/b0A+N/eku42G7MqZZtKWoLfMK1u/VK1b9RpAOMb9Djbzo4ybui41mjpkEJfSeaVOKTqOB4infHU7YoOecfWJ+zXt5WSuNIUVtrJ/RqkgKIDic+hq/wCIrXPRFddcaLTLKgCOeXEqPbYdvKl2CDzFHy00E0K+aKwetYoGx1S9O9aWp9TF6iyTnU2pI2VjACgc1u8aq5CVuOBDIUXFbJCUkkn0AHWg7mpH1w31Zz/IBWAod657x/xE2u+WmE2HmpDTmXW3G8EBRAxkbdM7pz0FNFlcl3S3MRpin4M5KUl9LeEryPTUDsaU+NuGbo6+l91MtbLGVfULUznH/KAfkmgWP8gT3nJn0okvLYbGyVqzvSzETp1LP4FSrk+28/l1RCTsCdyQK0SWwNLagR2NAZJNZoPaig6tbOA7jNCVz5LEJo7lOdbmPwNh8+1XXBbVmjXlbVuAUQFpS6s5UsDAznvv0wO1FFBZcUW9xOqTGWW5CTqQtJwR61yXiW+Xp9C4s+atxkHw+EH8gUUUCO+orX51dcNWFy6SmwoHQdwMdRWKKDt9o4EtBgpRNhNOnH3J3FFFFB//2Q=='
        }, {
            firstName: 'Ringo',
            lastName: 'Starr',
            instrument: 'Drums',
            membershipStartYear: new Date('1962-01-01'),
            membershipEndYear: new Date('1970-01-01'),
            imgSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAOAMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAABgcFBAMCAf/EADUQAAEDAwIDBgUACwAAAAAAAAECAwQABRESIQYxQQcTIlFhgSNCcZGxFBUWJDIzUmKCocH/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMEAP/EAB0RAAMBAAMBAQEAAAAAAAAAAAABAhEDEiExBGH/2gAMAwEAAhEDEQA/ALhU+4/4kCFqgsL+Gg4Xj51eX0H5pq4muC7Za3JTawkp5Z6+lQ64SlSnVFSsqzur68zU3WvB5nzTxXNLstIIW46s+FKTyHnW3bLpbbQQpa3ZctWwLR2T/kf+UntlyS/pY2MhwtpI6JHOmFMVJfiw4rWoqI1K6kef0ruyXgyh16bXDEltPE78pSlFp3cyHQck9dwR96YbwRK74IwotnBUPmB5H8j2rnkxw1HbKG0jQNJGKzrHMQxfHobqsJWAkA8uQxUu2h5OLJOm323vleJNFMzaEtZDaCrH9Ioo7hmUGR2tXMtRY0ZCtjlw469BUiclKDeEHKl5x+B+afu2LLTkTSToWjQD6g7/AJFSt+TgIA/iwfamn6a2sSRpW99LbpKVDDKdKcjY55mmPhy/hidksOvOukJ784KR9MdK+eDrVbLjBT+kNAqznV1pjmQGbc2y3FTtnI9t9qFNDxLWHjxNxTLtdwMBcT4Wx705wdW45UsfrBy43uP3Glp1xPgKFZCik9PXltVLnwo12gRJDqkrUlOlQB3qY9oamYsy3tRE90poqUCnYjligs+Arc0t/Ckxu4W/Kkd3La8D7ZGCFefvRSj2S3xV1fkKf1JeQyA74vCsg4yB0NFckn9J1qfhx9rrjL0UtJBUpjDpKd8ZOKij6ld7vzVnaq62FK4Zl3ia4XXX2S0lvmVZGOVSaWwk6lpPiSfFTzmnPcHLgKchDYaWcdK073fjeGxBtsNx4JV/N0nn6YpOiNLiYcQSNW+aYrZc4amQ1KWWkp+VO2qg17pSX51Z922Td+Hn1OqjuSY5Rugg+DzwCc1mcSO/tBxIjuvCEpQnfbBO5z962ZEmE78G0tnvljGxJFZlktKoU+4quSwgwgovavPPT1rkgW0n/Cwdn/C4sNgKwn96k4W4rOdugFFbUG4MQ7HFU3khSBsefvRVJ/O6Wmav0qXgv3DhN1qxNMRZKgoI0qOnOx54FTlrhOJA4mgR1yW5aHHQl1OnkD0JBx7UUUZhC1yV8NbjDg9VqQZUJpS7ed9tyz6H08j9/VIMAOPYSDknbFFFLSx+F+J951lX7PeCVQAi5XRvS7zaYVzT/cr18hXJOtEK48R3N2QrQgvqwpKQSlQAGd+dFFUSSRm5LbZtIgyu4THizGJim+h+Go+24/3X5RRVe7RBcc16f//Z'
        }, {
            firstName: 'Pete',
            lastName: 'Best',
            instrument: 'Drums',
            membershipStartYear: new Date('1960-01-01'),
            membershipEndYear: new Date('1962-01-01'),
            imgSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAOAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAGBwAFAQIEAwj/xAAyEAABAwMDAgMGBQUAAAAAAAABAgMEAAURBhIxIUFhcYEHExQiUaEyQlKRwRVyorHw/8QAGAEAAwEBAAAAAAAAAAAAAAAAAQMEAAL/xAAdEQADAAMAAwEAAAAAAAAAAAAAAQIRIUEDIjES/9oADAMBAAIRAxEAPwBwGltq32l/AynYViYbecaO1cl0Eoz3CQOfPOPOiT2iXddl0rKkMKCX3CllvpyVHr/jupINJQ6hLz5PzLJQ0OgA+h/bt/NT08FPjnJfN6w1LKd+IXeHG1/lbbQkJSP7cYPrXvF19qKKQJS2Zze7JU62EqxnjKcY9QaFVSR8xGArgISOfWtEyd25I3bVHg1xsZ6jUtF/TforzqYzjBbUAQpQIOfoa4bl1JoFt8hcKay+wtz3gcGUj8Khniji5d6VawxkPQOTu9YrE3vWaCBX0aftMjfE6LuIwCWkpeBI42qBP2zScscA3mTGhJkpacJASdvHjTz1nCeuWlbrDjI3vuxlBtOPxKHUDzyKU9u086vVloXEQ7Eiygl1BIxs2pBWkZPIORg+PTFUWI8b0dM72V3hpQMSXGf77iSg/wA0N3LS17tSwmTCWR+tsbk/anndr3EszO6Z71XT5Utp3KV5Cqt7UkOVbpUoRZaExs+9beZ2K6eFBvHQy2+CgtkBxM+GqUktoW+lJB/7wo1uR3Z6VwtvT71dGXlR240dl1LgQnBI8z9cZ4ruuJ5ApFPJRKwDU0EE5qVvMTnOalZAr6PR11DTanHFpQhI3KUo4AA7k0s2dYxp+vG4kJxBtjjuUrcbB3P7cbkE9Ug9B4nz6h2sdbXDUbrjKVLj23d8kdJxvHYrPc98cD0zQygkEKbUUqBykpOCDVL2SpYPp4hD7eFjoR1qquPwDEZUZ1TTLbiCMLIGR355oV0JrJV2ZMScQJjacq28uJ/UB/sDz44ub5HlSomYlwStlQzlzZtHiCE9a4p6OpWwWvepI1uU02lkuEK6hBxkY5+4qvF8iXDogqbcP5XBgnyqk1XbnIL8dxTynULRgFXOR39eaqUfUUtSmsjv00y9nHGckVmq1x5b+wrOSkY86lZIzopVAAda8iQD06VKlUIQzdiQ7HebfjuKaeaUFIcQcFJ+oouuOrP6nZ2pKYSW7sy8gvSG/wABHZSk8EkjGCD38KlShSRky8vjSr7piJNUAJPuUvEJ4JKfmFAjfTINSpSZ6htcOlvPB/esVKlEx//Z'
        }, {
            firstName: 'Paul',
            lastName: 'McCartney',
            instrument: 'Bass',
            membershipStartYear: new Date('1960-01-01'),
            membershipEndYear: new Date('1970-01-01'),
            imgSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAOAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBwAGAgMECAH/xAA1EAABAwMDAgMHAwIHAAAAAAABAgMEAAUREiExBkETFFEHFSJhgZGhMnHwI7EWM0JSorLB/8QAGAEBAQEBAQAAAAAAAAAAAAAAAwQBAgD/xAAdEQACAwADAQEAAAAAAAAAAAAAAQIDERIxQSEi/9oADAMBAAIRAxEAPwBfeXlAokKjqCTwojY1n7ruE1TrkZKkpaTlRp4otDPkGB4Ta2/DGxHFVVcaF5O5x2ng26nOwV2pu2FzxYA+m+kW247c91a5M5besKUD4bZ/27c/v+KwusCa5bEO3KIyvxyFNKKjwCNge2RnbP3pgdKSJUno5lTXhMr0YbkPAfGrUQr+3Jrt6qhvSOlpfmYqS+20VoQ2rVlQ9TgZ+1ROUlLS6MIuAn7p0/b0Wk3G1zHNbWPMRH0/Eg/JQ57nfsKCLkpGkMKUhOPiGeTRWysTrgt9pElMVx5pTT0Z9OA9gb6Tj9QyDjnfbmgMqM7DlLjPpw4g4OOKqqlqxklsOL+DJskxwWEuB1AbWNJz2qVw+zq1InoUqa5qjoV/l52zXygm4qTQsVqQy7bIPuKL586EltIWf3wP/azbtFkuEVuTH8s7G3ACGGylZBwc/DqzketKGN1lIEZu3zkGfAZIONZb1Y41Ecj+b4pk+z5qTb4DtquCGWZBeceCWgdA1qJwM/PO2+2K25uONGURTTWAg3QpRJZ6etSJjlvfMUMFQbDeSTrGeBlRH02q2WyVNetDSZ2G3ykeK0F6gk9xnvSskCX071vcIrscSm5jhCmlJKg4latSVAdyk/kGrva7rJuXUHuxTXlgxqQ5qR+kJ+Wf2+9FdB/GvSqmxSi0/ChdVodl9Zsw5MkrTDcbSykN6AnOCeOSSQMn5UN68d8W/Oq0hLuB4mOM/KvQDFhtaNbphoU85jxHXEgrVtyT2qm3r2V22c8p6BNkRc4+FxPiJH7cH81RVHjmktsuXQvfZ1fWrZOLEgn+ods8VK7Hekf8M3xoXNYUBlaHE/pUn+dqlHbHZajK5pLGUSMVLcShRyoqCUNpG25xXot8LmRm1W5tCnXJLbag4MaUhSQvPoQAr6ikzZLZ716zt8NtkpbQvW8U/wChCdyo/j701uh78xLuUmK+S1PalEOsOJ0EkpBK0g8pJ1KHyNetfPjolf55YF2JymVrdLYW638LicDUQD2+fNdNjt0dp96c0Uuvy3C4XSn4ggnZP0/vWu4wHHrwy7HGG3CfGUOEkHf7j8ijiVMpWEs4BQAFaew7CuaoyWp+G2yi8a9NjiNwE5yea1qAbGcDPrnNblKwnIGT3FD357CJaIqtKHnE6kauFYODg+u4+9OCLz2zbWNh5KyHW39HHKVJOf8AqKlEPa1B8fo9914BLjLza2txvk6SP+WfpUpI5gL7Kr0Q2zA6vbjRpTMpc1lxLmr0SkrGMb8pHFX2LaLE7eW5KoMf3ijJS+GShY2x+o87etSpQxjiRRu6G2oqHy4w6Vp8NwOpwrAJVk7/AFzWEZxqK46zgtBtWSgnkncnPck18qV0cg69dTxYTBbdcIDiT/UbJGkngA9z6Ec9qDvwOoLrAaMxzygbY+N9SQt4k9wjtt6787VKlaeOpvpi1NM+TWpyRJWgOOuvuFaldh8h34FSpUrjfoMuz//Z'
        }, {
            firstName: 'George',
            lastName: 'Harrison',
            instrument: 'Lead Guitar',
            membershipStartYear: new Date('1960-01-01'),
            membershipEndYear: new Date('1970-01-01'),
            imgSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAOAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAGBwAFAQQIA//EADQQAAEDAwIDBQYFBQAAAAAAAAECAwQABRESIQYxQRMUIlFhBzJCcYGxI1KRofEVFtHh8P/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwB1GgX2l8Zq4djog24oNxkJ95W/Yp/Njz+dHRNc/wDtfU5/ej5cKMKZQU6TnCAMb+uQf+3ICzyi8tcietTrivEVLJH1wPtWu26I7iVssaVBsqCl8ySeX6dKvOBmkXbiVlt1sKbZ/FUDyIH+yKMOOuEzPkKuEI9i4sAOICQpK8DAOPPFAr13RGfxG1g+WrAH6VccNcXSbZcWQ4+4uAtWHWd1EA9QPMHB2qivUF+A4BIa9MjNVRVnYbCgfst1DzKXWlhba0hSVDkQeRqUL8KXxidY4rDryO9DU32fI7b/AG3/AIqUD2edQy0txxQShAyonoK589rd1gTeJXe7xtDrSezdcTp/FIOxJG+2wwd9sUyfaVxMLRE7s25hcllQwpOUKHI53yDv0+tc+TXVvOEqIO/w8t6An4YN3tNscuVvQttcpWkOJj9opSU+WThIznc89qI+FbrxReJ6o815IaDRV2q2sFJxkDY8/Sr/AIPu6Dw7bI3YBJUwE4AyMjY1vzbvDtHjktOhrdKS0ySM4ySSOQoFLdl3i4z3RcEKUlK1J0stoJ26gE70OXSC9bpAS6kjUNSSU6dvl0p1xZzLkYvJbW22dRaLqNJUM+RpacZvO3aYkMMk9mCfCOmaCgtMp5q5sPI1rdTkIwRkZBHXbr1rFV+fFUoOkbpHjXWOY1wbS8nB06gCUk9R60krzAl8P31TaVaFtryy6Egggjng7cjTrB8ZoN9oLF5WoLt8cyYjjJaWhDQUppRPveYyDjPTeg9PZtc0T7O40+sGbFcUScYKkrJUDt66h9K3bxLmNNFUidCajk7JcirdOOgwFChngWFKs1yuMW4IMZ9xlGjJ+IeLY8jsr9jRPPv78OMFGCHD1U3g5HqDQasfvz7YLklt9hSeSGC3j13UaWvFklK73IRHUpLTYDWx97qfnzpjrukq6RDlruyFe9v4j/ilu/CVO4jlxmkqKsrUAkD4U5xvQU7LD0h4NsNrcX5JGaxRdYLU7bErlzRofWnSlvOdI8z61mgcSmxqrzkymobetxWNth51KlAqeK7nKeuRfdcc1bLSEq2T5YHp9/324HEKJUMCQrS6nYOY2+tYqUHpIu7MWAt1K9auWcYyaCu8OuTu9NqLbuvXrScGsVKC9/qi32gJCgVfmG2fp/FSpUoP/9k='
        }, {
            firstName: 'Stuart',
            lastName: 'Sutcliffe',
            instrument: 'Bass',
            membershipStartYear: new Date('1960-01-01'),
            membershipEndYear: new Date('1961-01-01'),
            imgSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAOAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQQFBgcCAwj/xAAwEAACAQMCBAIJBQEAAAAAAAABAgMABBEFIQYSEzFBcQciIzJRYWKBkRQWgqGxFf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCgSZFkztnc7fOmTzvIzZOzHtU1ddP/AJIHLjDbGq8Q8bCQowUscMRsSPnQXWw4B1XVtHju7YAu/uxtgHFP7L0M65OnUurq1ts+G7mtG4DmebQ7KVWB5ogzMCMdqthvLOJR17yBT9UgFBhk3oY11QTHe2b4P1DI/FQV/wAP3nC9/wDpbvBleHqAqdiO1fSN1f2FuoNxeQR8wyC8gGaxn0q3lvd8QWX6WeKaNLV8vG4YbsNsjy7UFAkLGBuY7c3aivEgnn32paCZvbdxpbEe6DmpF4IpfR4r21uXkLkzMuPZhMZJz9ztjufnURd36rpARXEnU2BU9vOvLhfiK50S5eNI1uLW59Sa3kOA2cbg4OD28x9sBaf2lp83Bj6totxeW90lt1pIYZWxK4XJ2rPJ57i6K9eee5YbJ1JGkPkM5/qty0yBJrSCOMCBuXldEOyn4U/PBWhhVnht7VL9fXjkeLmy4Odx40GW8eaBq/D9jok99qV5cm+tgZBI5IhkXB6YPiBzbeRqpxTzu2GmkZAD6pc4z5VuTQ6pfyLb8S3+nXVnboemkMQyz9ub3jgDcVkWoXFueIb2NkD24lMaY25eXbb8H80DSC3eSNmUZx3oq0WcmmRwhXgyj4yeYg0UFIU570oODkdxuK5TFKQPjQaFp/FiW063seZLaRR1UHvRNVuguLPiuNjzWMyYwDcDIT+NYeGKHKsQfiDSrNIjFkkdSe5U4zQaNr+mWnC9pLqEc2myXRbkhEFqkZU/LHw/wVm6sQ4Ykk5zk+NDyO5zI7MR4sc1yN+1BPJJ7Eqd/FTRTOJ/ZqM+A3paCMQV2aKKDlq5NFFAoGdq9Yk2NFFA5jG4FJRRQf/Z'
        }];
        ctrl.editRecord = function (record) {
            console.log('edit record!', record);
        }



        ctrl.searchBeatles = function (term) {
            var beatleList = [];
            angular.forEach(ctrl.records, function (item) {
                if ((item.firstName.toUpperCase() + item.lastName.toUpperCase()).indexOf(term.toUpperCase()) >= 0) {
                    beatleList.push(item);
                }

            })
            ctrl.beatles = beatleList;

        };

        ctrl.getBeatleText = function (item) {

            return '[~<i>' + (item.firstName || item.instrument) + '</i>]';
        };
    }
})