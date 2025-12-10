from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)

semua_pesan = []

app.secret_key = 'ini-rahasia-banget-loh'

@app.route('/guestbook', methods=['GET', 'POST'])
def bukutamu():
    if request.method == 'POST':
        nama = request.form.get('nama_post')
        pesan = request.form.get('pesan_post')
        komen = {'nama': nama, 'pesan': pesan}
        semua_pesan.append(komen)

        flash('Pesan Anda telah berhasil dikirim!', 'success')

        return redirect(url_for('bukutamu'))
    else:
        return render_template('GuestBook.html', semua_pesan=semua_pesan)
    
if __name__ == "__main__":
    app.run(debug=True)
    