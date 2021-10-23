# Workflow projektu

Pro práci na projektu a úpravu kódu a následné kolaboraci na git repozitáři doporučujeme se seznámit s workflow práce na projektu.

## Návod pro práci na projektu

### 1. Stažení projektu
1.1 Forknutí hlavního repozitáře https://github.com/vituja/fit.me-frontend
1.2 Naklonování forknutého repozitáře pomocí "git clone"

### 2. Práce na projektu

2.1 práce na projektu výhradně na branchi "dev" -> přesunutí na branch pomocí "git checkout dev"
2.2 Pro získání nejnovějších comitů z originálního repozitáře je třeba jít na stránku vašeho forknutého repozitáře a tam kliknout pod zeleným tlačítkem "Code" na tlačítko "Fetch Upstream" a poté na "Fetch and Merge" (POZOR! pro stáhnutí změn je třeba vlevo zkontrolovat že jste na "dev" branchi i ve vašem prohlížeči, abyste stáhli pořebné změny z branche na které pracujeme)
2.3 Poté co máte ve vašem vzdáleném repozitáři stažené nejnovější commity si na lokále stáhnete změny pomoci příkazů "git fetch" a "git merge" (Opět zkontrolovat že jsme na "dev" branch)
2.4 Atomizujte jednotlivé commity resp. commit se bude vztahovat pouze k jedné konkrétní věci (nechceme obrovský commit který se bude týkat několika různých featur)

### 3. Přispívání do hlavního repa

3.1 Poté co máte připravené všechny commity pomocí příkazu "git push" pošlete všechny změny do vašeho forknutého repa.
3.2 Následně ve vašem repu kliknete vedle tlačítka "fetch upstream" na tlačítko "Contribute" a poté na pull request
3.3 Popíšete čeho se váš pull request týka a request odešlete
3.4 Lead dev poté buď přijme či nepřijme váš pull request
