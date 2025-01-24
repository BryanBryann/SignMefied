import React from 'react'

const alphabetData = [
    { letter: 'Aa', image: 'dist/img/a.png' },
    { letter: 'Bb', image: 'dist/img/b.png' },
    { letter: 'Cc', image: 'dist/img/c.png' },
    { letter: 'Dd', image: 'dist/img/d.png' },
    { letter: 'Ee', image: 'dist/img/e.png' },
    { letter: 'Ff', image: 'dist/img/f.png' },
    { letter: 'Gg', image: 'dist/img/g.png' },
    { letter: 'Hh', image: 'dist/img/h.png' },
    { letter: 'Ii', image: 'dist/img/i.png' },
    { letter: 'Jj', image: 'dist/img/j.png' },
    { letter: 'Kk', image: 'dist/img/k.png' },
    { letter: 'Ll', image: 'dist/img/l.png' },
    { letter: 'Mm', image: 'dist/img/m.png' },
    { letter: 'Nn', image: 'dist/img/n.png' },
    { letter: 'Oo', image: 'dist/img/o.png' },
    { letter: 'Pp', image: 'dist/img/p.png' },
    { letter: 'Qq', image: 'dist/img/q.png' },
    { letter: 'Rr', image: 'dist/img/r.png' },
    { letter: 'Ss', image: 'dist/img/s.png' },
    { letter: 'Tt', image: 'dist/img/t.png' },
    { letter: 'Uu', image: 'dist/img/u.png' },
    { letter: 'Vv', image: 'dist/img/v.png' },
    { letter: 'Ww', image: 'dist/img/w.png' },
    { letter: 'Xx', image: 'dist/img/x.png' },
    { letter: 'Yy', image: 'dist/img/y.png' },
    { letter: 'Zz', image: 'dist/img/z.png' },
  ];

const tutourial = () => {
  return (
    <div>

        <section>
            <div className="container-fluid pt-3 pb-3 bg-violet fixed-top border-play">
                <p className="fs-3 text-white balance text-center fw-semibold">
                    Tutorial Mode
                </p>
            </div>
            <div className="container-fluid pt-3 pb-3 bg-violet border-play">
                <p className="fs-3 text-white balance text-center fw-semibold">
                    Tutorial Mode
                </p>
            </div>
        </section>
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

    <section>
        <div className="container d-flex justify-content-center mb-4 fixed-bottom">
            <a href="practice" className="btn bg-violet fs-5 text-white border-play">
                PROCEED
            </a>
        </div>
    </section>

    <div className="vh-30">

    </div>
  </div>
  )
}

export default tutourial
