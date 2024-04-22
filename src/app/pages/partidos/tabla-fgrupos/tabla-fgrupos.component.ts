import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { fasesGrupos, resultados } from '../../../interfaces/interface';
import { Router, RouterModule } from '@angular/router';
import { SchampionService } from '../../../services/schampion.service';

@Component({
  selector: 'app-tabla-fgrupos',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './tabla-fgrupos.component.html',
})
export class TablaFgruposComponent implements OnInit {

  fasesgrupos!:fasesGrupos;

  route = inject(Router);

  jornada1: resultados[] = [];
  jornada2: resultados[] = [];
  jornada3: resultados[] = [];
  jornada4: resultados[] = [];
  jornada5: resultados[] = [];
  jornada6: resultados[] = [];


  sc = inject(SchampionService)

  getJornada1(){
    let data = localStorage.getItem('Jornada 1')
    if (data) {
      this.jornada1 = JSON.parse(data)
    }
  }

  getJornada2(){
    let data = localStorage.getItem('Jornada 2')
    if (data) {
      this.jornada2 = JSON.parse(data)
    }
  }

  getJornada3(){
    let data = localStorage.getItem('Jornada 3')
    if (data) {
      this.jornada3 = JSON.parse(data)
    }
  }

  getJornada4(){
    let data = localStorage.getItem('Jornada 4')
    if (data) {
      this.jornada4 = JSON.parse(data)
    }
  }

  getJornada5(){
    let data = localStorage.getItem('Jornada 5')
    if (data) {
      this.jornada5 = JSON.parse(data)
    }
  }

  getJornada6(){
    let data = localStorage.getItem('Jornada 6')
    if (data) {
      this.jornada6 = JSON.parse(data)
    }
  }

  getFGrupos(){
    let data = localStorage.getItem('Fases de grupos')
    if (data) {
      this.fasesgrupos = JSON.parse(data)

      this.fasesgrupos.grupof1.forEach( m => {
        m.partidos = 0;
        m.puntos = 0
      })

      this.fasesgrupos.grupof2.forEach( m => {
        m.partidos = 0;
        m.puntos = 0
      })

      this.fasesgrupos.grupof3.forEach( m => {
        m.partidos = 0;
        m.puntos = 0
      })

      this.fasesgrupos.grupof4.forEach( m => {
        m.partidos = 0;
        m.puntos = 0
      })

      this.fasesgrupos.grupof5.forEach( m => {
        m.partidos = 0;
        m.puntos = 0
      })

      this.fasesgrupos.grupof6.forEach( m => {
        m.partidos = 0;
        m.puntos = 0
      })

      this.fasesgrupos.grupof7.forEach( m => {
        m.partidos = 0;
        m.puntos = 0
      })

      this.fasesgrupos.grupof8.forEach( m => {
        m.partidos = 0;
        m.puntos = 0
      })
    }
  }

rj1(){
  this.jornada1.forEach(
    j => {
      if (j.golesl > j.golesv) {

        this.fasesgrupos.grupof1.forEach(
          m => {
            if(m.name === j.local){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.visitante) {
              m.partidos++
            }
          })

        this.fasesgrupos.grupof2.forEach(
          m => {
            if(m.name === j.local){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.visitante) {
              m.partidos++
            }
          })

        this.fasesgrupos.grupof3.forEach(
          m => {
            if(m.name === j.local){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.visitante) {
              m.partidos++
            }
          })

          this.fasesgrupos.grupof4.forEach(
            m => {
              if(m.name === j.local){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.visitante) {
                m.partidos++
              }
            })

          this.fasesgrupos.grupof5.forEach(
            m => {
              if(m.name === j.local){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.visitante) {
                m.partidos++
              }
            })

          this.fasesgrupos.grupof6.forEach(
            m => {
              if(m.name === j.local){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.visitante) {
                m.partidos++
              }
            })

            this.fasesgrupos.grupof7.forEach(
              m => {
                if(m.name === j.local){
                  m.partidos++;
                  m.puntos+=3
                } if (m.name === j.visitante) {
                  m.partidos++
                }
              })

            this.fasesgrupos.grupof8.forEach(
              m => {
                if(m.name === j.local){
                  m.partidos++;
                  m.puntos+=3
                } if (m.name === j.visitante) {
                  m.partidos++
                }
              })

      } else if (j.golesv > j.golesl) {
        this.fasesgrupos.grupof1.forEach(
          m => {
            if(m.name === j.visitante){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.local) {
              m.partidos++
            }
          })

          this.fasesgrupos.grupof2.forEach(
            m => {
              if(m.name === j.visitante){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.local) {
                m.partidos++
              }
            })
          this.fasesgrupos.grupof3.forEach(
            m => {
              if(m.name === j.visitante){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.local) {
                m.partidos++
              }
            })
            this.fasesgrupos.grupof4.forEach(
              m => {
                if(m.name === j.visitante){
                  m.partidos++;
                  m.puntos+=3
                } if (m.name === j.local) {
                  m.partidos++
                }
              })
              this.fasesgrupos.grupof5.forEach(
                m => {
                  if(m.name === j.visitante){
                    m.partidos++;
                    m.puntos+=3
                  } if (m.name === j.local) {
                    m.partidos++
                  }
                })
              this.fasesgrupos.grupof6.forEach(
                m => {
                  if(m.name === j.visitante){
                    m.partidos++;
                    m.puntos+=3
                  } if (m.name === j.local) {
                    m.partidos++
                  }
                })
              this.fasesgrupos.grupof7.forEach(
                m => {
                  if(m.name === j.visitante){
                    m.partidos++;
                    m.puntos+=3
                  } if (m.name === j.local) {
                    m.partidos++
                  }
                })
                this.fasesgrupos.grupof8.forEach(
                  m => {
                    if(m.name === j.visitante){
                      m.partidos++;
                      m.puntos+=3
                    } if (m.name === j.local) {
                      m.partidos++
                    }
                  })
      } else if (j.golesv == j.golesl) {
        this.fasesgrupos.grupof1.forEach(
          m => {
            if(m.name === j.visitante ){
              m.partidos++;
              m.puntos++
            }
            if (m.name === j.local) {
              m.partidos++;
              m.puntos++
            }
          })

        this.fasesgrupos.grupof2.forEach(
          m => {
            if(m.name === j.visitante ){
              m.partidos++;
              m.puntos++
            }
            if (m.name === j.local) {
              m.partidos++;
              m.puntos++
            }
          })

        this.fasesgrupos.grupof3.forEach(
          m => {
            if(m.name === j.visitante ){
              m.partidos++;
              m.puntos++
            }
            if (m.name === j.local) {
              m.partidos++;
              m.puntos++
            }
          })

          this.fasesgrupos.grupof4.forEach(
            m => {
              if(m.name === j.visitante ){
                m.partidos++;
                m.puntos++
              }
              if (m.name === j.local) {
                m.partidos++;
                m.puntos++
              }
            })

          this.fasesgrupos.grupof5.forEach(
            m => {
              if(m.name === j.visitante ){
                m.partidos++;
                m.puntos++
              }
              if (m.name === j.local) {
                m.partidos++;
                m.puntos++
              }
            })

            this.fasesgrupos.grupof6.forEach(
              m => {
                if(m.name === j.visitante ){
                  m.partidos++;
                  m.puntos++
                }
                if (m.name === j.local) {
                  m.partidos++;
                  m.puntos++
                }
              })

            this.fasesgrupos.grupof7.forEach(
              m => {
                if(m.name === j.visitante ){
                  m.partidos++;
                  m.puntos++
                }
                if (m.name === j.local) {
                  m.partidos++;
                  m.puntos++
                }
              })

            this.fasesgrupos.grupof8.forEach(
              m => {
                if(m.name === j.visitante ){
                  m.partidos++;
                  m.puntos++
                }
                if (m.name === j.local) {
                  m.partidos++;
                  m.puntos++
                }
              })
      }
    }
  )
  this.fasesgrupos.grupof1.sort( (a,b) => b.puntos - a.puntos )
  this.fasesgrupos.grupof2.sort( (a,b) => b.puntos - a.puntos )
  this.fasesgrupos.grupof3.sort( (a,b) => b.puntos - a.puntos )
  this.fasesgrupos.grupof4.sort( (a,b) => b.puntos - a.puntos )
  this.fasesgrupos.grupof5.sort( (a,b) => b.puntos - a.puntos )
  this.fasesgrupos.grupof6.sort( (a,b) => b.puntos - a.puntos )
  this.fasesgrupos.grupof7.sort( (a,b) => b.puntos - a.puntos )
  this.fasesgrupos.grupof8.sort( (a,b) => b.puntos - a.puntos )
}
rj2(){
  this.jornada2.forEach(
    j => {
      if (j.golesl > j.golesv) {

        this.fasesgrupos.grupof1.forEach(
          m => {
            if(m.name === j.local){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.visitante) {
              m.partidos++
            }
          })

        this.fasesgrupos.grupof2.forEach(
          m => {
            if(m.name === j.local){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.visitante) {
              m.partidos++
            }
          })

        this.fasesgrupos.grupof3.forEach(
          m => {
            if(m.name === j.local){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.visitante) {
              m.partidos++
            }
          })

          this.fasesgrupos.grupof4.forEach(
            m => {
              if(m.name === j.local){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.visitante) {
                m.partidos++
              }
            })

          this.fasesgrupos.grupof5.forEach(
            m => {
              if(m.name === j.local){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.visitante) {
                m.partidos++
              }
            })

          this.fasesgrupos.grupof6.forEach(
            m => {
              if(m.name === j.local){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.visitante) {
                m.partidos++
              }
            })

            this.fasesgrupos.grupof7.forEach(
              m => {
                if(m.name === j.local){
                  m.partidos++;
                  m.puntos+=3
                } if (m.name === j.visitante) {
                  m.partidos++
                }
              })

            this.fasesgrupos.grupof8.forEach(
              m => {
                if(m.name === j.local){
                  m.partidos++;
                  m.puntos+=3
                } if (m.name === j.visitante) {
                  m.partidos++
                }
              })

      } else if (j.golesv > j.golesl) {
        this.fasesgrupos.grupof1.forEach(
          m => {
            if(m.name === j.visitante){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.local) {
              m.partidos++
            }
          })

          this.fasesgrupos.grupof2.forEach(
            m => {
              if(m.name === j.visitante){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.local) {
                m.partidos++
              }
            })
          this.fasesgrupos.grupof3.forEach(
            m => {
              if(m.name === j.visitante){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.local) {
                m.partidos++
              }
            })
            this.fasesgrupos.grupof4.forEach(
              m => {
                if(m.name === j.visitante){
                  m.partidos++;
                  m.puntos+=3
                } if (m.name === j.local) {
                  m.partidos++
                }
              })
              this.fasesgrupos.grupof5.forEach(
                m => {
                  if(m.name === j.visitante){
                    m.partidos++;
                    m.puntos+=3
                  } if (m.name === j.local) {
                    m.partidos++
                  }
                })
              this.fasesgrupos.grupof6.forEach(
                m => {
                  if(m.name === j.visitante){
                    m.partidos++;
                    m.puntos+=3
                  } if (m.name === j.local) {
                    m.partidos++
                  }
                })
              this.fasesgrupos.grupof7.forEach(
                m => {
                  if(m.name === j.visitante){
                    m.partidos++;
                    m.puntos+=3
                  } if (m.name === j.local) {
                    m.partidos++
                  }
                })
                this.fasesgrupos.grupof8.forEach(
                  m => {
                    if(m.name === j.visitante){
                      m.partidos++;
                      m.puntos+=3
                    } if (m.name === j.local) {
                      m.partidos++
                    }
                  })
      } else if (j.golesv == j.golesl) {
        this.fasesgrupos.grupof1.forEach(
          m => {
            if(m.name === j.visitante ){
              m.partidos++;
              m.puntos++
            }
            if (m.name === j.local) {
              m.partidos++;
              m.puntos++
            }
          })

        this.fasesgrupos.grupof2.forEach(
          m => {
            if(m.name === j.visitante ){
              m.partidos++;
              m.puntos++
            }
            if (m.name === j.local) {
              m.partidos++;
              m.puntos++
            }
          })

        this.fasesgrupos.grupof3.forEach(
          m => {
            if(m.name === j.visitante ){
              m.partidos++;
              m.puntos++
            }
            if (m.name === j.local) {
              m.partidos++;
              m.puntos++
            }
          })

          this.fasesgrupos.grupof4.forEach(
            m => {
              if(m.name === j.visitante ){
                m.partidos++;
                m.puntos++
              }
              if (m.name === j.local) {
                m.partidos++;
                m.puntos++
              }
            })

          this.fasesgrupos.grupof5.forEach(
            m => {
              if(m.name === j.visitante ){
                m.partidos++;
                m.puntos++
              }
              if (m.name === j.local) {
                m.partidos++;
                m.puntos++
              }
            })

            this.fasesgrupos.grupof6.forEach(
              m => {
                if(m.name === j.visitante ){
                  m.partidos++;
                  m.puntos++
                }
                if (m.name === j.local) {
                  m.partidos++;
                  m.puntos++
                }
              })

            this.fasesgrupos.grupof7.forEach(
              m => {
                if(m.name === j.visitante ){
                  m.partidos++;
                  m.puntos++
                }
                if (m.name === j.local) {
                  m.partidos++;
                  m.puntos++
                }
              })

            this.fasesgrupos.grupof8.forEach(
              m => {
                if(m.name === j.visitante ){
                  m.partidos++;
                  m.puntos++
                }
                if (m.name === j.local) {
                  m.partidos++;
                  m.puntos++
                }
              })
      }
    }
  )
this.fasesgrupos.grupof1.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof2.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof3.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof4.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof5.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof6.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof7.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof8.sort( (a,b) => b.puntos - a.puntos )
}
rj3(){
  this.jornada3.forEach(
    j => {
      if (j.golesl > j.golesv) {

        this.fasesgrupos.grupof1.forEach(
          m => {
            if(m.name === j.local){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.visitante) {
              m.partidos++
            }
          })

        this.fasesgrupos.grupof2.forEach(
          m => {
            if(m.name === j.local){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.visitante) {
              m.partidos++
            }
          })

        this.fasesgrupos.grupof3.forEach(
          m => {
            if(m.name === j.local){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.visitante) {
              m.partidos++
            }
          })

          this.fasesgrupos.grupof4.forEach(
            m => {
              if(m.name === j.local){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.visitante) {
                m.partidos++
              }
            })

          this.fasesgrupos.grupof5.forEach(
            m => {
              if(m.name === j.local){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.visitante) {
                m.partidos++
              }
            })

          this.fasesgrupos.grupof6.forEach(
            m => {
              if(m.name === j.local){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.visitante) {
                m.partidos++
              }
            })

            this.fasesgrupos.grupof7.forEach(
              m => {
                if(m.name === j.local){
                  m.partidos++;
                  m.puntos+=3
                } if (m.name === j.visitante) {
                  m.partidos++
                }
              })

            this.fasesgrupos.grupof8.forEach(
              m => {
                if(m.name === j.local){
                  m.partidos++;
                  m.puntos+=3
                } if (m.name === j.visitante) {
                  m.partidos++
                }
              })

      } else if (j.golesv > j.golesl) {
        this.fasesgrupos.grupof1.forEach(
          m => {
            if(m.name === j.visitante){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.local) {
              m.partidos++
            }
          })

          this.fasesgrupos.grupof2.forEach(
            m => {
              if(m.name === j.visitante){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.local) {
                m.partidos++
              }
            })
          this.fasesgrupos.grupof3.forEach(
            m => {
              if(m.name === j.visitante){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.local) {
                m.partidos++
              }
            })
            this.fasesgrupos.grupof4.forEach(
              m => {
                if(m.name === j.visitante){
                  m.partidos++;
                  m.puntos+=3
                } if (m.name === j.local) {
                  m.partidos++
                }
              })
              this.fasesgrupos.grupof5.forEach(
                m => {
                  if(m.name === j.visitante){
                    m.partidos++;
                    m.puntos+=3
                  } if (m.name === j.local) {
                    m.partidos++
                  }
                })
              this.fasesgrupos.grupof6.forEach(
                m => {
                  if(m.name === j.visitante){
                    m.partidos++;
                    m.puntos+=3
                  } if (m.name === j.local) {
                    m.partidos++
                  }
                })
              this.fasesgrupos.grupof7.forEach(
                m => {
                  if(m.name === j.visitante){
                    m.partidos++;
                    m.puntos+=3
                  } if (m.name === j.local) {
                    m.partidos++
                  }
                })
                this.fasesgrupos.grupof8.forEach(
                  m => {
                    if(m.name === j.visitante){
                      m.partidos++;
                      m.puntos+=3
                    } if (m.name === j.local) {
                      m.partidos++
                    }
                  })
      } else if (j.golesv == j.golesl) {
        this.fasesgrupos.grupof1.forEach(
          m => {
            if(m.name === j.visitante ){
              m.partidos++;
              m.puntos++
            }
            if (m.name === j.local) {
              m.partidos++;
              m.puntos++
            }
          })

        this.fasesgrupos.grupof2.forEach(
          m => {
            if(m.name === j.visitante ){
              m.partidos++;
              m.puntos++
            }
            if (m.name === j.local) {
              m.partidos++;
              m.puntos++
            }
          })

        this.fasesgrupos.grupof3.forEach(
          m => {
            if(m.name === j.visitante ){
              m.partidos++;
              m.puntos++
            }
            if (m.name === j.local) {
              m.partidos++;
              m.puntos++
            }
          })

          this.fasesgrupos.grupof4.forEach(
            m => {
              if(m.name === j.visitante ){
                m.partidos++;
                m.puntos++
              }
              if (m.name === j.local) {
                m.partidos++;
                m.puntos++
              }
            })

          this.fasesgrupos.grupof5.forEach(
            m => {
              if(m.name === j.visitante ){
                m.partidos++;
                m.puntos++
              }
              if (m.name === j.local) {
                m.partidos++;
                m.puntos++
              }
            })

            this.fasesgrupos.grupof6.forEach(
              m => {
                if(m.name === j.visitante ){
                  m.partidos++;
                  m.puntos++
                }
                if (m.name === j.local) {
                  m.partidos++;
                  m.puntos++
                }
              })

            this.fasesgrupos.grupof7.forEach(
              m => {
                if(m.name === j.visitante ){
                  m.partidos++;
                  m.puntos++
                }
                if (m.name === j.local) {
                  m.partidos++;
                  m.puntos++
                }
              })

            this.fasesgrupos.grupof8.forEach(
              m => {
                if(m.name === j.visitante ){
                  m.partidos++;
                  m.puntos++
                }
                if (m.name === j.local) {
                  m.partidos++;
                  m.puntos++
                }
              })
      }
    }
  )
this.fasesgrupos.grupof1.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof2.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof3.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof4.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof5.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof6.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof7.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof8.sort( (a,b) => b.puntos - a.puntos )
}
rj4(){
  this.jornada4.forEach(
    j => {
      if (j.golesl > j.golesv) {

        this.fasesgrupos.grupof1.forEach(
          m => {
            if(m.name === j.local){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.visitante) {
              m.partidos++
            }
          })

        this.fasesgrupos.grupof2.forEach(
          m => {
            if(m.name === j.local){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.visitante) {
              m.partidos++
            }
          })

        this.fasesgrupos.grupof3.forEach(
          m => {
            if(m.name === j.local){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.visitante) {
              m.partidos++
            }
          })

          this.fasesgrupos.grupof4.forEach(
            m => {
              if(m.name === j.local){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.visitante) {
                m.partidos++
              }
            })

          this.fasesgrupos.grupof5.forEach(
            m => {
              if(m.name === j.local){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.visitante) {
                m.partidos++
              }
            })

          this.fasesgrupos.grupof6.forEach(
            m => {
              if(m.name === j.local){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.visitante) {
                m.partidos++
              }
            })

            this.fasesgrupos.grupof7.forEach(
              m => {
                if(m.name === j.local){
                  m.partidos++;
                  m.puntos+=3
                } if (m.name === j.visitante) {
                  m.partidos++
                }
              })

            this.fasesgrupos.grupof8.forEach(
              m => {
                if(m.name === j.local){
                  m.partidos++;
                  m.puntos+=3
                } if (m.name === j.visitante) {
                  m.partidos++
                }
              })

      } else if (j.golesv > j.golesl) {
        this.fasesgrupos.grupof1.forEach(
          m => {
            if(m.name === j.visitante){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.local) {
              m.partidos++
            }
          })

          this.fasesgrupos.grupof2.forEach(
            m => {
              if(m.name === j.visitante){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.local) {
                m.partidos++
              }
            })
          this.fasesgrupos.grupof3.forEach(
            m => {
              if(m.name === j.visitante){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.local) {
                m.partidos++
              }
            })
            this.fasesgrupos.grupof4.forEach(
              m => {
                if(m.name === j.visitante){
                  m.partidos++;
                  m.puntos+=3
                } if (m.name === j.local) {
                  m.partidos++
                }
              })
              this.fasesgrupos.grupof5.forEach(
                m => {
                  if(m.name === j.visitante){
                    m.partidos++;
                    m.puntos+=3
                  } if (m.name === j.local) {
                    m.partidos++
                  }
                })
              this.fasesgrupos.grupof6.forEach(
                m => {
                  if(m.name === j.visitante){
                    m.partidos++;
                    m.puntos+=3
                  } if (m.name === j.local) {
                    m.partidos++
                  }
                })
              this.fasesgrupos.grupof7.forEach(
                m => {
                  if(m.name === j.visitante){
                    m.partidos++;
                    m.puntos+=3
                  } if (m.name === j.local) {
                    m.partidos++
                  }
                })
                this.fasesgrupos.grupof8.forEach(
                  m => {
                    if(m.name === j.visitante){
                      m.partidos++;
                      m.puntos+=3
                    } if (m.name === j.local) {
                      m.partidos++
                    }
                  })
      } else if (j.golesv == j.golesl) {
        this.fasesgrupos.grupof1.forEach(
          m => {
            if(m.name === j.visitante ){
              m.partidos++;
              m.puntos++
            }
            if (m.name === j.local) {
              m.partidos++;
              m.puntos++
            }
          })

        this.fasesgrupos.grupof2.forEach(
          m => {
            if(m.name === j.visitante ){
              m.partidos++;
              m.puntos++
            }
            if (m.name === j.local) {
              m.partidos++;
              m.puntos++
            }
          })

        this.fasesgrupos.grupof3.forEach(
          m => {
            if(m.name === j.visitante ){
              m.partidos++;
              m.puntos++
            }
            if (m.name === j.local) {
              m.partidos++;
              m.puntos++
            }
          })

          this.fasesgrupos.grupof4.forEach(
            m => {
              if(m.name === j.visitante ){
                m.partidos++;
                m.puntos++
              }
              if (m.name === j.local) {
                m.partidos++;
                m.puntos++
              }
            })

          this.fasesgrupos.grupof5.forEach(
            m => {
              if(m.name === j.visitante ){
                m.partidos++;
                m.puntos++
              }
              if (m.name === j.local) {
                m.partidos++;
                m.puntos++
              }
            })

            this.fasesgrupos.grupof6.forEach(
              m => {
                if(m.name === j.visitante ){
                  m.partidos++;
                  m.puntos++
                }
                if (m.name === j.local) {
                  m.partidos++;
                  m.puntos++
                }
              })

            this.fasesgrupos.grupof7.forEach(
              m => {
                if(m.name === j.visitante ){
                  m.partidos++;
                  m.puntos++
                }
                if (m.name === j.local) {
                  m.partidos++;
                  m.puntos++
                }
              })

            this.fasesgrupos.grupof8.forEach(
              m => {
                if(m.name === j.visitante ){
                  m.partidos++;
                  m.puntos++
                }
                if (m.name === j.local) {
                  m.partidos++;
                  m.puntos++
                }
              })
      }
    }
  )
this.fasesgrupos.grupof1.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof2.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof3.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof4.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof5.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof6.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof7.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof8.sort( (a,b) => b.puntos - a.puntos )
}
rj5(){
  this.jornada5.forEach(
    j => {
      if (j.golesl > j.golesv) {

        this.fasesgrupos.grupof1.forEach(
          m => {
            if(m.name === j.local){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.visitante) {
              m.partidos++
            }
          })

        this.fasesgrupos.grupof2.forEach(
          m => {
            if(m.name === j.local){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.visitante) {
              m.partidos++
            }
          })

        this.fasesgrupos.grupof3.forEach(
          m => {
            if(m.name === j.local){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.visitante) {
              m.partidos++
            }
          })

          this.fasesgrupos.grupof4.forEach(
            m => {
              if(m.name === j.local){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.visitante) {
                m.partidos++
              }
            })

          this.fasesgrupos.grupof5.forEach(
            m => {
              if(m.name === j.local){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.visitante) {
                m.partidos++
              }
            })

          this.fasesgrupos.grupof6.forEach(
            m => {
              if(m.name === j.local){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.visitante) {
                m.partidos++
              }
            })

            this.fasesgrupos.grupof7.forEach(
              m => {
                if(m.name === j.local){
                  m.partidos++;
                  m.puntos+=3
                } if (m.name === j.visitante) {
                  m.partidos++
                }
              })

            this.fasesgrupos.grupof8.forEach(
              m => {
                if(m.name === j.local){
                  m.partidos++;
                  m.puntos+=3
                } if (m.name === j.visitante) {
                  m.partidos++
                }
              })

      } else if (j.golesv > j.golesl) {
        this.fasesgrupos.grupof1.forEach(
          m => {
            if(m.name === j.visitante){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.local) {
              m.partidos++
            }
          })

          this.fasesgrupos.grupof2.forEach(
            m => {
              if(m.name === j.visitante){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.local) {
                m.partidos++
              }
            })
          this.fasesgrupos.grupof3.forEach(
            m => {
              if(m.name === j.visitante){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.local) {
                m.partidos++
              }
            })
            this.fasesgrupos.grupof4.forEach(
              m => {
                if(m.name === j.visitante){
                  m.partidos++;
                  m.puntos+=3
                } if (m.name === j.local) {
                  m.partidos++
                }
              })
              this.fasesgrupos.grupof5.forEach(
                m => {
                  if(m.name === j.visitante){
                    m.partidos++;
                    m.puntos+=3
                  } if (m.name === j.local) {
                    m.partidos++
                  }
                })
              this.fasesgrupos.grupof6.forEach(
                m => {
                  if(m.name === j.visitante){
                    m.partidos++;
                    m.puntos+=3
                  } if (m.name === j.local) {
                    m.partidos++
                  }
                })
              this.fasesgrupos.grupof7.forEach(
                m => {
                  if(m.name === j.visitante){
                    m.partidos++;
                    m.puntos+=3
                  } if (m.name === j.local) {
                    m.partidos++
                  }
                })
                this.fasesgrupos.grupof8.forEach(
                  m => {
                    if(m.name === j.visitante){
                      m.partidos++;
                      m.puntos+=3
                    } if (m.name === j.local) {
                      m.partidos++
                    }
                  })
      } else if (j.golesv == j.golesl) {
        this.fasesgrupos.grupof1.forEach(
          m => {
            if(m.name === j.visitante ){
              m.partidos++;
              m.puntos++
            }
            if (m.name === j.local) {
              m.partidos++;
              m.puntos++
            }
          })

        this.fasesgrupos.grupof2.forEach(
          m => {
            if(m.name === j.visitante ){
              m.partidos++;
              m.puntos++
            }
            if (m.name === j.local) {
              m.partidos++;
              m.puntos++
            }
          })

        this.fasesgrupos.grupof3.forEach(
          m => {
            if(m.name === j.visitante ){
              m.partidos++;
              m.puntos++
            }
            if (m.name === j.local) {
              m.partidos++;
              m.puntos++
            }
          })

          this.fasesgrupos.grupof4.forEach(
            m => {
              if(m.name === j.visitante ){
                m.partidos++;
                m.puntos++
              }
              if (m.name === j.local) {
                m.partidos++;
                m.puntos++
              }
            })

          this.fasesgrupos.grupof5.forEach(
            m => {
              if(m.name === j.visitante ){
                m.partidos++;
                m.puntos++
              }
              if (m.name === j.local) {
                m.partidos++;
                m.puntos++
              }
            })

            this.fasesgrupos.grupof6.forEach(
              m => {
                if(m.name === j.visitante ){
                  m.partidos++;
                  m.puntos++
                }
                if (m.name === j.local) {
                  m.partidos++;
                  m.puntos++
                }
              })

            this.fasesgrupos.grupof7.forEach(
              m => {
                if(m.name === j.visitante ){
                  m.partidos++;
                  m.puntos++
                }
                if (m.name === j.local) {
                  m.partidos++;
                  m.puntos++
                }
              })

            this.fasesgrupos.grupof8.forEach(
              m => {
                if(m.name === j.visitante ){
                  m.partidos++;
                  m.puntos++
                }
                if (m.name === j.local) {
                  m.partidos++;
                  m.puntos++
                }
              })
      }
    }
  )
this.fasesgrupos.grupof1.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof2.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof3.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof4.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof5.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof6.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof7.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof8.sort( (a,b) => b.puntos - a.puntos )
}
rj6(){
  this.jornada6.forEach(
    j => {
      if (j.golesl > j.golesv) {

        this.fasesgrupos.grupof1.forEach(
          m => {
            if(m.name === j.local){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.visitante) {
              m.partidos++
            }
          })

        this.fasesgrupos.grupof2.forEach(
          m => {
            if(m.name === j.local){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.visitante) {
              m.partidos++
            }
          })

        this.fasesgrupos.grupof3.forEach(
          m => {
            if(m.name === j.local){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.visitante) {
              m.partidos++
            }
          })

          this.fasesgrupos.grupof4.forEach(
            m => {
              if(m.name === j.local){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.visitante) {
                m.partidos++
              }
            })

          this.fasesgrupos.grupof5.forEach(
            m => {
              if(m.name === j.local){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.visitante) {
                m.partidos++
              }
            })

          this.fasesgrupos.grupof6.forEach(
            m => {
              if(m.name === j.local){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.visitante) {
                m.partidos++
              }
            })

            this.fasesgrupos.grupof7.forEach(
              m => {
                if(m.name === j.local){
                  m.partidos++;
                  m.puntos+=3
                } if (m.name === j.visitante) {
                  m.partidos++
                }
              })

            this.fasesgrupos.grupof8.forEach(
              m => {
                if(m.name === j.local){
                  m.partidos++;
                  m.puntos+=3
                } if (m.name === j.visitante) {
                  m.partidos++
                }
              })

      } else if (j.golesv > j.golesl) {
        this.fasesgrupos.grupof1.forEach(
          m => {
            if(m.name === j.visitante){
              m.partidos++;
              m.puntos+=3
            } if (m.name === j.local) {
              m.partidos++
            }
          })

          this.fasesgrupos.grupof2.forEach(
            m => {
              if(m.name === j.visitante){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.local) {
                m.partidos++
              }
            })
          this.fasesgrupos.grupof3.forEach(
            m => {
              if(m.name === j.visitante){
                m.partidos++;
                m.puntos+=3
              } if (m.name === j.local) {
                m.partidos++
              }
            })
            this.fasesgrupos.grupof4.forEach(
              m => {
                if(m.name === j.visitante){
                  m.partidos++;
                  m.puntos+=3
                } if (m.name === j.local) {
                  m.partidos++
                }
              })
              this.fasesgrupos.grupof5.forEach(
                m => {
                  if(m.name === j.visitante){
                    m.partidos++;
                    m.puntos+=3
                  } if (m.name === j.local) {
                    m.partidos++
                  }
                })
              this.fasesgrupos.grupof6.forEach(
                m => {
                  if(m.name === j.visitante){
                    m.partidos++;
                    m.puntos+=3
                  } if (m.name === j.local) {
                    m.partidos++
                  }
                })
              this.fasesgrupos.grupof7.forEach(
                m => {
                  if(m.name === j.visitante){
                    m.partidos++;
                    m.puntos+=3
                  } if (m.name === j.local) {
                    m.partidos++
                  }
                })
                this.fasesgrupos.grupof8.forEach(
                  m => {
                    if(m.name === j.visitante){
                      m.partidos++;
                      m.puntos+=3
                    } if (m.name === j.local) {
                      m.partidos++
                    }
                  })
      } else if (j.golesv == j.golesl) {
        this.fasesgrupos.grupof1.forEach(
          m => {
            if(m.name === j.visitante ){
              m.partidos++;
              m.puntos++
            }
            if (m.name === j.local) {
              m.partidos++;
              m.puntos++
            }
          })

        this.fasesgrupos.grupof2.forEach(
          m => {
            if(m.name === j.visitante ){
              m.partidos++;
              m.puntos++
            }
            if (m.name === j.local) {
              m.partidos++;
              m.puntos++
            }
          })

        this.fasesgrupos.grupof3.forEach(
          m => {
            if(m.name === j.visitante ){
              m.partidos++;
              m.puntos++
            }
            if (m.name === j.local) {
              m.partidos++;
              m.puntos++
            }
          })

          this.fasesgrupos.grupof4.forEach(
            m => {
              if(m.name === j.visitante ){
                m.partidos++;
                m.puntos++
              }
              if (m.name === j.local) {
                m.partidos++;
                m.puntos++
              }
            })

          this.fasesgrupos.grupof5.forEach(
            m => {
              if(m.name === j.visitante ){
                m.partidos++;
                m.puntos++
              }
              if (m.name === j.local) {
                m.partidos++;
                m.puntos++
              }
            })

            this.fasesgrupos.grupof6.forEach(
              m => {
                if(m.name === j.visitante ){
                  m.partidos++;
                  m.puntos++
                }
                if (m.name === j.local) {
                  m.partidos++;
                  m.puntos++
                }
              })

            this.fasesgrupos.grupof7.forEach(
              m => {
                if(m.name === j.visitante ){
                  m.partidos++;
                  m.puntos++
                }
                if (m.name === j.local) {
                  m.partidos++;
                  m.puntos++
                }
              })

            this.fasesgrupos.grupof8.forEach(
              m => {
                if(m.name === j.visitante ){
                  m.partidos++;
                  m.puntos++
                }
                if (m.name === j.local) {
                  m.partidos++;
                  m.puntos++
                }
              })
      }
    },

    this.kobutton = true

  )
this.fasesgrupos.grupof1.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof2.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof3.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof4.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof5.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof6.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof7.sort( (a,b) => b.puntos - a.puntos )
this.fasesgrupos.grupof8.sort( (a,b) => b.puntos - a.puntos )
}

ngOnInit(): void {
  this.getFGrupos()

  this.sc.cargarfGrupo.subscribe(
    data => {
      this.getJornada1()
      this.getJornada2()
      this.getJornada3()
      this.getJornada4()
      this.getJornada5()
      this.getJornada6()

      if (data == 1) {
        this.rj1()
      } else if(data == 2){
        this.rj2()
      } else if(data == 3){
        this.rj3()
      } else if(data == 4){
        this.rj4()
      } else if(data == 5){
        this.rj5()
      } else if(data == 6){
        this.rj6()
      }
    }
  )}

  kobutton:boolean = false;

  kos(){
      localStorage.setItem('Fases posiciones', JSON.stringify(this.fasesgrupos) )
  }

}
