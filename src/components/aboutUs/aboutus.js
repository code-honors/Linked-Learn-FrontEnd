import React from "react";
import "./aboutus.scss";
import { Card } from "react-bootstrap";
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';


const About = () => {
    const cardInfo = [
        {
            image: "https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png",
            title: "Afnan Damra",
            text: "Full Stack Developer",
        },
        {
            image:
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYYGRgaGhwYGhoYHBgYHBwZGhoZGhgYGBocIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDE0NDQ0MTQ0NDQ0ND00NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABDEAACAQIEAwQHBAkDAgcAAAABAgADEQQSITEFQVEGYXGBEyIykaGxwVJy0fAUIzNCYoKSsuEHovFT0hUWNGN0k8L/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAKBEAAgIBBAICAgEFAAAAAAAAAAECEQMSITFBBFETIjJhIxRSkaHh/9oADAMBAAIRAxEAPwAeI1pwPGBoljjxHiRSVTygMPJnZydJihFadBnBHNFYSJtRcyu5vJmkLQmBPFf2Tj+EzIibLi4/VP8AdMxolY8CMOcA/ap91vlNWTMnwE/rU8G/tM1yPYg2B7jsfGCXJNop48XpuLfun4C4+Uz7YdEprV9t29lCBl6ag3zeE2GOpqAzNZVsSQNhpymSo2yjfKo0v0/z9YVuNBMb6xUPXcuF9lWJKrffKNvdOYbhr4hwW9ReV9z5cpquC9lGqWq1hbmlMgWHew5nu5TV0+DqOX0kZ+RFbI7YeLKStmHp9mAu5Fu8kW9x3jjwNxYA7i1yxt467eU3q8KTpr1Mc3D1kP6iR0LxI9s8g41w1qLXtYbm2o8RKjKGseul+/lPUu0XAc9IkasoJt1HMTyyomQsh29pZ24cmuNnFmxfHKujhzUyDyPuPcY5cS9B8yH1W9YDkQeREmxHr0SeYsfdK1RLpb7IDr91t/cZQg0GHxyu9Guulm9G46Ztr92/vmhnnaVCt7c7fA3HxE9BoY1qyiqxuzjMx09rY7eERolJUSqI+8jvFmmE5JbiKR5z0igsNEYM4IhOtpAdIr6yUCRKY/NAYkvOkxitHGKEkWIxqNrOtFYUROZWcyyx0lV11hMUeK/sn+6flMaJsuJn9W/3W+UxolYcCMMcCP61PBv7TNZmmS4J+1T+b+1puRgCUzA+tvb8O+M4uT2JSkkUeL1Loqkg5tSNNAOsXZbg/p64LD1KfrsORY6IPIAm0H4l8zsOQsn1aej9h8Fkw4a2tRi58Nl+AkM0tEa9nZ48VdvoN08LptJRhO6EKKCSsk40kdLzOwW2FEhajCzjSVKiwNIaGRsGus8n7ecJ9HVzqPVa7L5+0vkfmJ67UWZ3tdw30uHawuyeuOtv3gPL5CPhnol+mNmjrh+0eSYN7oR3SGibqF5qSh+697fGNpHIzL4zuGHrnvAPuZZ6Z5ZRmr7M1r0iv2WPuOv4zKNufEw12YrEOU+0PiNoJcCSVo1d50xjRXkyaHRRt4pqCJjFeNtOpMXHCdBkZaJTAYmQxwkYMchisI9THkyItOs8DCiOobc5Cz/OPqNIHExirxA+o/3W+Uxomwx37N/un5THiVjwIwz2e/b0h3n+1pvMTVUEW3Gk8+4K1qtM9Cf7WmvLjeU1UQlG2DXa7se9jPYuCU8lGmvRFHwE8ZQXNuZa3vM9aTEVG/ZgBBoCedtLgGcfk7tHpePG4s0lG8sFesy/6XiAdP8A8wxwrEuwOfec9oM8ckrLbjSCcdj6ae02vQaybiVS91vaAnwqL6zamK2rK4sTasVTjam+VHPkRGU+KIxykFWI0DC1+okNXtDQQhMyi+wB8vpK1bF4fEgpcX36Ed4ma/RdbbWeZdrsB6HEOF9m91+62o923lBuDb1r/wAJ+k13bHhrhMxOZV9UNubbgMfzvMXgL5iOit9BPRxyuKZ5maOmTRAq7n83ioVSpzKbEbeINx8QJJiBlUL5nxlYSpE9Ao1s6qw2IB94kmbugvs3iA1EDmhKnw3X8PKE80myL5O37oosxigMcd52IrGA2mOgcTGgzhM6DAYmEcDIxErwGJWjHTSPB5RpaKEjcbGQuZM5lZpglfG+w/3T8pjlmwxR9R/un5THrKR4EYS4MD6VPE/IzW01uQOpA+MyXBVJrUwBclrADncGbVcMFeztYjcDe45X+sz5EaASPZtP3XHzBm6xvH6npRQopcqBc3sAOdzr3W85gnFncefxP4ieqJwlVbOigF1AbTw6SHkNWrPQ8VNp0S4c11XM6ra5Bytm28vleEsJiTcEbSKnQYgKTcDly90sCmFsAAOc5NrtHW601LdgrivEP1uQc43G4TOQGDZQL3HM20Hh18oM4hricw5CHsDWzLaZ7Ox1tGkU6NCiL50Rly2yFM4PiGv0mYxPBKb1gaCPTGtyuijbQLN4aCnlI/QKvKHXJC6YPozuM4OWoujNclbX7+XxtPJcMmWo4I5fUT3HFva88g42gTE1mGxFx4k3t7zOjxJN2mcvlwpKQEx2mnPc+e0qSziltodz6zHv6SqJ3I89hfsziMtQpycW811HwLTUgzBYarkdW+ywPuOs3gMnInJbj7xTkUACQyN4s8jZpi47NFmkRMcomMS545DGCdDQGLBMZUnAZxm1ihI2OsjYSfSMqQBKeJ9hvun5THLNlifYbwPymOTaUjwKwx2ZrKmJpOwJsx265WAPvtPRsegeh6QAXzesRMF2e4LiKjoyUnK3vmIKrbrmawPlPU+HdnKpQo7EKd1W3zIk5yindjLG30ea4hLVhpfMSviTqPlPa6GigkHYcu6Q4Ls7TpesqKG+1a7f1GCePY6pT1/d2PIi/O4kMklNo7MEai1Zogy2uGGu2vwktPBFrk6CY7Du91L3ynZ+h7zymjHEalMevZktfOCNB3xHGhpKVfVix3AECkjVvtXN5mk4sKLmm6kONegI6iGuDdpqdWu9K9mOq30BGUaDvlDtxwgOmddHT1ge7mD3TJLUr4HhOauL5LGF4wGOtgOsIVm0nmXDOIma3hnFgRlbbr0lM2JJXEOOab3LOOfQzyziwzYhx/ECfAAn5gT1bFoCpI1FuU8n4kf11ZuhsPdc/T3weLyxfMdxRn8a93bxlcTrm5nWWwv1nejyxk2/DXzUkbnlF/ECx+UxJ3mt4C96K9xI+N/rBLgRhSKNvOxBBt4wmPvImmLnZ0mMvHiYJ286TGETpgMSo0fzkCmSoYrChPtGlSdBuZOlMscoBJJsB3mek9muyy0VDuAah1+73Dv74kpaR0vZjuH9i61UXc+jUjmLvY93Lzmq4D2BwuHAKoHf7b+s3lyHkJqkAEnWoLbyLyN9jt1+KK9LAgchJ2KoNZBXx4ANpm+McdVASx8hvJuS6Hhinke/BoW4ih0g7iXDlqoeYIM86xHaGoXLJZR0Ot++ansh2ozsadUBc3snkTzHdeGnyy7w/GtUNyDhFX0bHDVfZPsMfkZexVE0GViuakCdDrlJsLju/EyftVwoMuZdCNQZzs9xIYimabj1kFj3jaG+x27iprjsEcb7O03tiMO2R/aDLsbdehkeL48jYdgxs6qVI3uQOsdTxLU8SaC+ywJK8geo98w/F8O6s9lYh8wzAeqNSpDdDp8Y0abpj1S90DadSzXvvDuBxBmbp4XLtfvhfCvadDORP2a3AYr1WBOmUn3TzXitbR2+0xPlewPuEMcb4kUQqp1OkymNr58qjYADztDjhTcvZLNktaSChSLNaOxZ1sNhpCVCgETX2uf4QTUN2Muc407zVdnFvSP3z8hMqs1vZwfqv5j8hBLgSXASyzs7FEEsjMhMc7yLNczFh0ehkYbWOUzBHTt4286IDDgZKhkYhLgvDWr1FRdt2PRRuYsnSsaKbZqOwnBs7+mceqvs35t18vn4TfYqrbSQ4PDrSpqqiwUWlHGV5yTle5eENUv0jmJxtpSfiFh84D43xIKCOZ/N553xXtfUzFEa42J2B7hb5xY4pT4OpvHjX2PQeK8eN8lOzMfODKfBqtQ5n056/hMnwPtRkYZqSuSwGbMbi5tfWbX/AM1Lb2Gv/LGlinHZI0fJx9sfT7PourEn4RDh6vURUXKFIZj56CDMZ2jdvZUKO/U++WuzfEqlfEJTVFVNWqNqTZbc+pJAm+KfLKrysb2Ruu0dSyW7oP7NYIKazAW2HnlBY+8wX244+tJQwszZgFU31I5G3Ln5Qzg67JhQ7gK7DOwB0BIvby0itPkmrWJQ7YAwYvjnb7KH46S5gsKCga2jFm97Ej4QXwtzler+/WbKg/hva/hz8oeq1lRALiyqB7haTnfB0NNMx/avhyLldFC3JzW27jaZXE4tUB1mg7V9oEsUFmPOed1qpY3M7fHjJx+xweTOKf1Fi8UXYsfKLAU7uD01Mg5y4z5EsPab4CdfCOHl7lxqmdsg6awLUWzN3EwlQ/VozH2m/IEGH5wGYkE1fZxwaZF9QxuPEC3yMznoso13PKEez1RvTZFBOcWsBckjUWA8DM+BJLY1EUl/RKn/AE6n9D/hFEtCU/QGaqekYtUyLH0mRirG5BI0PnKgaNsWCPpOc6K8HZjzj1fXnBsYvjER36QJR16x6Fj362mpGCOHJchVBJJAA5knYT1/slwMYemM3ttq5+Sjwmc7A9m7AYmoNT+zU8h9v8J6G3qrOXLK9kWSpftlbFVYC4jXsCTCOJeZTtBirLb86TnS1So7ccVGNmX4rUeq5Vdz01gbDf6fV31LqvipPyM1GC4vhqaBmJL81Aub9/TznKnbTX1KOnVn+gE7IqSVRRxZJa5W2DcF/p4y2LYgaENoh5G9tWhDiPDMPQ/aVmLbhFC5vMcvODsd2oruMq2QfwXv/UfpATu17nU9SSf+ZSMJP8mTen0FxisPf2KxHXMl/dl+sLdiOLIr1KZOV3X1L22XMSPG2vlMNiMbluNz8BBrVCTcnWO8aao0Mmh2kbbhFQY7iK5jemhLIDzVbW/qNie6bDtlxWwWmNicp7wPatPJOEcSfDVFq07ZlvodiCLEHul/jfaBq9b0liihQoXcDYt72v5ASUsNtLo6o+SknLs1/HePhBTXDa5dSbbC1gpuL8ztAFfjuIcEFgL91vmJWStpc6j7Q1Hn0iqmw/PwhWKMeics85O2wXjKDML3BObW1+drQdk1t5Q2jG5lavQXNm21uZVMgyiiZDdht85JgEzuWbkM30HziKNUNl9kbk7f5kjjIoppqzbnmfwEzMVq7Go9hsPzecRAz2Hsrv5S3VQUksDdjuZCFyJ/E2p+kwCHEPcwz2DA/T8OSQBnOpNh7DaX79B5wA7R1NDcW3/DnNJWqMnufTHo+6KeJf8AnfEfaP8AVFOf4Zex9SKnGQfSsCOZOmxvreU1EK9oaJWo3Qk7dee0Fyq4FFe3PyiDaxExKO6MAmRrm1prOxvA1qYnI9mCLnKjY6gBT3QNwLC5mzkaDQd7f4mq4Vif0at6YDQjKw6i+h8RDKDcXRXHFXbPVMOBbSQ4qpylPAcVp1VLIwuNwCPj74q9cbkgfL3zz5povCNytlXGVLAzzrtPjC1wOenlzmu43jlCkAi5nnXEK+Zz3afj+e6P48LdspmlpjQIanUHsm/cdYz9OdfbTzWECJBiFFiTtPQPPG0cejaXseh0j8bUyIW35DxMBYhgToJH6ZgMtzl3tNRrHMbzkaHnQYwg9RDWGwwCAEXvvBOHYBgTyM0VMgi4iyHRQrYIjWmSp6cj5R+Fc2ysdeY0U+QOh8jL9ttJx0B3AMSxiq9E65Ra/Myo+FH77A/wrLb0k6W8CV+AkQCrqNPM/WABG5IGVRboJECtMFibsRqencI3EYs3yqLk6CJMLb13N26ch+MJiGmhY+kfb90fWVa9XMbyxjcTmNhtKlOmWOUf8eMKAztClnbuG8tuAqluoyr4cz5yelRAGQbbsZUx9S5sNhMYpxRZYoQHoHazBWYvre310G/SZdWno/a3CAqbjkdr9Rraebtpp0kYO0NLk7z3+ks4HCtUcIvPc8gOsbh8Oz7bdbfhNRwbAhE29Y6sT8vCWjG2ZRss4TC5MqIO4a636m/WNxuJ3ptbOt7jbYkG46i0lquB3aWvymb7VszBXL3dDuLXymwG3gJWVrjgrwglRxLJ66uUHOxtmHTvkSdt6qPlZVqJcZgb3sDupB0MzA4ozaOAeVxcfDaRO68jIyipcoGt9M13aLtIjuDQcuGABUq65XO9i/LUAb635QWaRG5lHgmA9I5JYKq63PXkALj8iF8fhSil7oy87HKfIG4J85owUVSBJyluyhiHCDNmPhveCsTii+h26STGVlY7k9OVvESm+kdKiUjhnLRRQijSkV7R4Es4XDlza2nODgJWRpocBXzIPVAA0069bQbiOFH9zXukdBKyHQHw0IivcZbGiBvtIajSLDYl7eulu8EfImcqOT3eMFBsid5WKM223U7f5lh0Xcm/dsJBWxNhpAYSIqajU9Tv/gSlicUToInzNvoIko8lGvM8h4zGK6UyxAG5/NzCtGgEGVdzuY/DYXKLKCSdza9/8SSrScDRH/pP4QOSHjim+EytiqoVco/58YOoUmdrDc/AdTLVThtdtfRP/SZoeA8KdELMrBmA3U3A108ZlKPsKw5G94v/AABP/D6f/UX4fjFNN/4f/wC3/snY2pexvgl6Nz2ho3VhYG97eNtDtbpPKMfTyuwtz+es9t4xh7jbSeWcQ4XmxLC3q310t5D5yGDfYnJblnh2GUUafWxJ77km/wAZcd8oJ6SQKANBoAAB9JDWIsPzfp7zadyVIZIrY+uxGVAAxNiTsum9ufPTugarlpj1gX9IchzbsDu1+63xELvTDM/3vWt1st/w8bwVXYVK2b9ymMqjkWO5/PSLIzM7isMUax25HqJHYwvj30sdRyB7ufcbmCTaITaDWBxCUqPrICz3YEjyW3dzgupUJ3J+cjeoecYWj3SA3YmbrGNOmcMRyBRxtQIgZ0bRrTGofntCXC6yi4vqbWgwazikg6QMyNP6QRheD6PE+TrfvG8I0wjC4G/lFGuxjvIWqSdqC9T75GaC9T74TFV2lWo5vZRc90IPhU6n3xwyroABAYr4bCkC7EeA/GEOHUlNREtoWFx16ylUqHlqZd4Ap/SELHmfeVIA95EWb+rKYUtav2jfNg0ZRlsumwAsP5fqJRbhx5S5QbW3fDuBpgrPPjGUpUfROagrMgcI45GJKbDc++anG4cWuBsYJq0gTBKM4uisMsZLd0Vs3cn+7/uikn6MJ2Lql6H/AI/7jdcQXSee45R6RrciR8bn5z0biDBUZzawUn3TzUtcljubn3z0vEjyz5Zi7pWdwCzkXVBe3VuQkrtoesiZR6qcr528j6vxF/KdbAUMY5Snl3fn3u2p+JMoKmVQOnxJ1JMtO2ezHmc3v1H090p4t9IjMCse9zBzGWcQbn8/nlKzmKSY28U4I4CYxyJjOyNoDHUnTGoZ0wgHCcvedWcAmMSIhhahWygCDKb2FuUvqM6HTbTkNesEkFF+4aQtSN+7xlLAVCDkJ8IUU23NotBsr1KZ5SNaJMvqoOs5nUTUYrLQAnS2XbedqVZVqPpMaza8H48Kq5H/AGi212zLtfx2ms4VWBGW/h+E82w3C3pYd8SVOYFNAWBCEgHVdjqCeVhNFwLiPpE0OvkDpve3MfUGReNr+SPC6PRw+Qpx+Kez6ZsMXcKbg763gt05+cvYDG2GRxmU9dx4GPx/DyjKQbowupPxB74spKX2QZaoPS++GCc3cYpfzCKStB0y9lztbjlCeiU+sbFu5dwPE7+Uxzm0t4nEF2LtuxLeHQDwFhKjz08cNEUjgIjKeMc5Gtu5CD+bQnyUEy2+0oYs+uByRb/z1PwUf7ozMQvt3QXi9dJfqtBmMq2Gm95MDBuLYDQbnU/QfKU7c4RoYK4zve3/ADt7pTxVS5toQNLjYiKybIVjxItpKZjCMiaPZpJh6GcGxsygsehXu/POY3JAojjOCOMwBCdWITqjWEw9BDOEw5RCzaX+QvBmHplmAG50mtwODV3SkxIVnVCRvZgBce+CT2HjGzIGrle+67j/AAYYWoNPeLwvx/sHUwbZ2PpEv6rjYdM67g/DvgM0zziqSa2BVEua20jZ5C5O0hNBzzhMX8BhHrutOmAztsLgDUgXJ5DWeg8F/wBP1pun6Q6s5OawN1W39x7z02lP/TDs47BsSRpst+g6ed/dNv8AozmpfKbC/wCEjJ26TGQL7dURh8KjYe2ZHzG4DB0yOHRxsVKsdOdpneDYKniclTDA06hbK6Nql0pXXIRy9Sxvr6530mx4uqsuRhcsGyD+IAFYH7D8HFHFXs6kZxkI9RTlGbKTqd1t3GPjmoXEs8LeJZFyuf8AhymcwB2uL947oTw+JZlKPqFF17jtp75Tq+24GwdwP/saSroT3Ix+E5ZRqdI69ali+3PQ2w6CdlX9OX7J985G0kfkYKqLaVah1lzEjSDqz2nqSOY4Tc26wYz3Zm+07N5D1V/2qJaara5G9jbx5fG0HnQW5AfKTbMccEysKKj1mnauJOyiQthGfVybdBoIoCjj8WX9RNQN7QU41hfG4lUGRLeXgR9YIUXMBOQ+06YhHUcM7+wpPfy981WBuiuxk+BrFGDAX0I8jvCeG4ATq7gdy6/EwthuCUF3BbxP5E2kTUkZbEspclRlB5fP4xJSZvZUnwBM32HpYdNkT3Awnh8UnLKPhDpA5M83p8MrNtSc/wAp+st0+AYk7UX+A+s9OpYun9tfjLdPFJ9se4zG1MwXDez9ZBc02zHfbTuGsJ4Th1daiv6NtGVuX7p8Zt6WKp/alhaqHYj3iI9+iqm0ugnxLFUaiFSw1HMNv7pjh2XwtdD65ouCbML5Dfa6N9CJoVVT/wAidNISSio8M2ts89xPYisr5UqUHG4IdV94bb4wpwj/AE3dmDVq9NVvqtMl2I5jNoB8ZrGw/cJC2FX7I8tIab7Nr/Rpaa06NMImVVUWABHKOwldMpu69Nxy/wA3mUfD/wATD+Yn4GRCi66Br/eH1ERYle7Nr2LvbbFBWwzKw0d7ldbeqLXtLvBcca1ZCVIKI1zupLZLFTzvaA/QBxlqr6rG2ddSjn2X623BHQy72QwVSjiaqPf1UuupKkFhZl7jadfww+O091/tE15M1L42rTWz9Mohsxvbmx97E3+Mq42q1iF3INvgI7D1PVGvIfGQ13HpAvMbicklu2d8XtpKn6JV6zkI+lMUnrZX40DavsDwEE4nf89Iop6cuDkRTfb89ZUqbTsUkzMrUfaPlL2J9jyMUUADG1Nz4zg2iimJCG01mF9hPuj5RRRoiTJFnW2nYoexDiyRNxFFGME8JvLxiigCSrvJViihJssU+ULYSKKSkUQQpxVIopHsp0V2kbbRRQik2G9h/un5GG+H+zT/APj/APbFFKR/EKMNQ9kfyfSU63/qD4n+6KKc77O1cotRRRSB0n//2Q==",
            title: "Ruba Banat",
            text: "Full Stack Developer",
        },
        {
            image:
                "https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png",
            title: "Ahmad Alfrijat",
            text: "Full Stack Developer",
        },
        {
            image:
                "https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png",
            title: "Bashar Nofal",
            text: "Full Stack Developer",
        },
        {
            image: "assets/zaid.jpg",
            title: "Zaid Al-Asfar",
            text: "Full Stack Developer",
        }

    ];

    const renderCard = (card, index) => {
        return (
            <>
                <Navbar />
                <Card style={{ width: "18rem" }} key={index} className="box">
                    <Card.Img variant="top" src={card.image} style={{ objectFit: 'cover', height: '200px' }} />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.text}</Card.Text>
                    </Card.Body>
                </Card>

            </>
        );
    };

    return (
        <>
            <div className="grid" >{cardInfo.map(renderCard)}
            </div>
            <Footer />
        </>
    )

};

export default About;