import React from 'react';

const alphabetData = [
  { letter: 'Aa', image: '/img/a.png' },
  { letter: 'Bb', image: '/img/b.png' },
  { letter: 'Cc', image: '/img/c.png' },
  { letter: 'Dd', image: '/img/d.png' },
  { letter: 'Ee', image: '/img/e.png' },
  { letter: 'Ff', image: '/img/f.png' },
  { letter: 'Gg', image: '/img/g.png' },
  { letter: 'Hh', image: '/img/h.png' },
  { letter: 'Ii', image: '/img/i.png' },
  { letter: 'Jj', image: '/img/j.png' },
  { letter: 'Kk', image: '/img/k.png' },
  { letter: 'Ll', image: '/img/l.png' },
  { letter: 'Mm', image: '/img/m.png' },
  { letter: 'Nn', image: '/img/n.png' },
  { letter: 'Oo', image: '/img/o.png' },
  { letter: 'Pp', image: '/img/p.png' },
  { letter: 'Qq', image: '/img/q.png' },
  { letter: 'Rr', image: '/img/r.png' },
  { letter: 'Ss', image: '/img/s.png' },
  { letter: 'Tt', image: '/img/t.png' },
  { letter: 'Uu', image: '/img/u.png' },
  { letter: 'Vv', image: '/img/v.png' },
  { letter: 'Ww', image: '/img/w.png' },
  { letter: 'Xx', image: '/img/x.png' },
  { letter: 'Yy', image: '/img/y.png' },
  { letter: 'Zz', image: '/img/z.png' },
];

const Header = () => (
  <section>
    <div className="container-fluid bg-lightpurple d-none rounded-30">
      <div className="row ps-md-5">
        <div className="col-2 col-md-1 mt-2 mb-2">
          <img src="/img/icon-clean.png" width="95" height="80" alt="" />
        </div>
        <div className="col-9 col-md-11  ps-4 d-flex justify-content-start align-items-center">
          <div className="row ps-4">
            <div className="col-12">
              <p className="text-white balance fw-bold fs-4">
                KOALA
              </p>
            </div>
            <div className="col-12">
              <p className="text-white balance">
                You can only exit when you finish the guidebook goal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// const Footer = () => (
//   <section>
//     <div className="container-fluid fixed-bottom">
//       <a href="/guidebook">
//         <img src="/img/back.png" height="120" width="120" alt="Back Button" />
//       </a>
//     </div>
//   </section>
// );

const Alphabet = () => (
  <div>
    <Header />
    <section>
      <div className="container p-4 rounded">
        <div className="row bg-violet rounded border-plays mt-3 mb-2 p-3 balance">
          <div className="col-1">
            <img src="/img/alphabet.png" height="40" width="40" alt="Alphabet Icon" />
          </div>
          <div className="col-10 pt-md-2 ps-4 balance">
            <p className="text-white balance">American Sign Language Alphabet</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          {alphabetData.map((item) => (
            <div key={item.letter} className="col-5 col-sm-5 col-md-2 bg-white az-border pt-3 m-2 rounded">
              <p className="text-dark fw-bold fs-3">{item.letter}</p>
              <div className="container d-flex justify-content-center">
                <img src={item.image} height="100" width="100" alt={item.letter} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* <Footer /> */}

    <div className="vh-30">

    </div>
  </div>
);

export default Alphabet;