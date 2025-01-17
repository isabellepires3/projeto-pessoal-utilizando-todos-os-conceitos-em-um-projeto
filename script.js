class Section {
      constructor(title, content) {
        this.title = title;
        this.content = content;
      }

      render() {
        const sectionElement = document.createElement('section');
        const titleElement = document.createElement('h1');
        const contentElement = document.createElement('p');

        titleElement.innerText = this.title;
        contentElement.innerText = this.content;

        sectionElement.appendChild(titleElement);
        sectionElement.appendChild(contentElement);
        return sectionElement;
      }
    }

    class HandebolInfo {
      constructor() {
        this.sections = this.createSections();
        this.render();
      }

      createSections() {
        return [
          new Section(
            "O Que é o handebol",
            "O handebol é um esporte coletivo, no qual duas equipes disputam quem marca mais gols. O esporte é jogado com uma bola, mas, ao contrário do futebol, os participantes jogam a bola com a mão e não com os pés."
          ),
          new Section(
            "Como surgiu o handebol?",
            "Foi criado por um alemão, ele começou a ser jogado em Berlim, na Alemanha durante a primeira guerra mundial. No entanto, não demorou muito para que ele se difundisse pela Europa e ainda, para outras partes do mundo."
          ),
          new Section(
            "Quem foi o criador do handebol?",
            "Karl Schelenz, foi um atleta e professor de educação física alemão. Ele é conhecido principalmente por sua contribuição para o desenvolvimento e divulgação do handball como é praticado hoje em dia."
          ),
          new Section(
            "Como surgiu o handebol no Brasil?",
            "O Handebol foi introduzido no Brasil após 1930 quando um grande número de imigrantes alemães veio ao Brasil por consequência da primeira guerra mundial, dirigindo-se aos estados do sul e sudeste do país, principalmente o Estado de São Paulo por causa da semelhança climática."
          ),
          new Section(
            "Quantas pessoas praticam handebol no Brasil?",
            "Segundo a Confederação Brasileira de Handebol (CBHb), estima-se que existam mais de 1 milhão de praticantes no país."
          ),
        ];
      }

      render() {
        const contentElement = document.getElementById('content');
        this.sections.forEach(section => {
          contentElement.appendChild(section.render());
        });
      }
    }

    // Instancia o objeto de informações sobre o handebol
    new HandebolInfo();

